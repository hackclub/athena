import Airtable from "airtable";

function escapeFormulaValue(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"');
}

export class AirtableManager {
  public base: Airtable.Base;
  public tableName: string;

  constructor(tableName: string, apiKey: string, baseId: string) {
    // Default airtable client timeout is 300s, which is far longer than the
    // 5s window Orchard's liveness probe (which hits "/") allows per attempt.
    this.base = new Airtable({ apiKey: apiKey, requestTimeout: 8000 }).base(baseId!);
    this.tableName = tableName;
  }

  async getLatestRecord() {
    const records = await this.base(this.tableName)
      .select({
        sort: [{ field: "order", direction: "desc" }],
        maxRecords: 1,
      })
      .all();

    return records[0];
  }

  async getAllRecords(orderByThisField: string) {
    const records = await this.base(this.tableName)
      .select({
        sort: [{ field: orderByThisField, direction: "asc" }],
      })
      .all();

    return records;
  }

  async createRecord(fields: Airtable.FieldSet) {
    return this.base(this.tableName).create(fields);
  }

  async updateRecord(recordId: string, fields: Airtable.FieldSet) {
    return this.base(this.tableName).update(recordId, fields);
  }

  async findRecordByField(field: string, value: string) {
    const records = await this.base(this.tableName)
      .select({
        filterByFormula: `{${field}} = "${escapeFormulaValue(value)}"`,
        maxRecords: 1,
      })
      .all();

    return records[0] || null;
  }
}

export class AirtableTeamManager extends AirtableManager {
  constructor() {
    super(
      "team",
      process.env.AIRTABLE_TEAM_API_KEY!,
      process.env.AIRTABLE_TEAM_BASE_ID!
    );
  }

  async getTeamPageMembers() {
    // Mirrors the curated "Team page" view's manual ordering.
    return this.base(this.tableName)
      .select({ view: "viw6VBXuF2cnwqI36" })
      .all();
  }

  async getAllTeamMembers() {
    return this.base(this.tableName).select().all();
  }
}

export class AirtableStoriesManager extends AirtableManager {
  constructor() {
    // Same base as AirtableTeamManager ("Athena Website 2026"), different table.
    super(
      "stories",
      process.env.AIRTABLE_TEAM_API_KEY!,
      process.env.AIRTABLE_TEAM_BASE_ID!
    );
  }

  async getAllStories() {
    return this.base(this.tableName).select().all();
  }
}

// Per-project fields are Airtable lookups over the user's approved projects, so
// they arrive as parallel arrays. "First Name" is also a lookup (one element).
export type AthenaAwardProfile = {
  "First Name"?: string[];
  "Last Name Initial"?: string;
  total_time_approved_projects?: number;
  total_approved_projects?: number;
  "Project Name"?: string[];
  "Code URL"?: string[];
  "Playable URL"?: string[];
  Description?: string[];
  created_at?: string[];
  approved_duration?: number[];
  screenshot_cdn_url?: string[];
  "Project Name Unified"?: string[];
  "Code URL Unified"?: string[];
  "Playable URL Unified"?: string[];
  created_at_unified?: string[];
  approved_duration_unified?: number[];
  screenshot_cdn_url_unified?: string[];
};

export class AirtableUsersManager extends AirtableManager {
  constructor() {
    super(
      "Registered Users",
      process.env.AIRTABLE_PROJECTS_API_KEY!,
      process.env.AIRTABLE_PROJECTS_BASE_ID!
    );
  }

  async getQualifiedUserByCertId(certId: string): Promise<AthenaAwardProfile | null> {
    const records = await this.base(this.tableName)
      .select({
        filterByFormula: `{cert_id} = "${escapeFormulaValue(certId)}"`,
        maxRecords: 1,
        view: "Qualifications",
        fields: [
          "First Name",
          "Last Name Initial",
          "total_time_approved_projects",
          "total_approved_projects",
          "Project Name",
          "Code URL",
          "Playable URL",
          "Description",
          "created_at",
          "approved_duration",
          "screenshot_cdn_url",
          "Project Name Unified",
          "Code URL Unified",
          "Playable URL Unified",
          "created_at_unified",
          "approved_duration_unified",
          "screenshot_cdn_url_unified",
        ],
      })
      .all();

    return (records[0]?.fields as AthenaAwardProfile | undefined) ?? null;
  }
}

export class AirtableSignupsManager extends AirtableManager {
  constructor() {
    super(
      process.env.AIRTABLE_EMAIL_TABLE_ID!,
      process.env.AIRTABLE_API_KEY!,
      process.env.AIRTABLE_BASE_ID!
    );
  }

  async createSignup(email: string) {
    return this.createRecord({ email });
  }

  async findOrCreateByEmail(email: string) {
    const existing = await this.findByEmail(email);
    if (existing) return existing;
    return this.createSignup(email);
  }

  async findByEmail(email: string) {
    return this.findRecordByField("email", email);
  }

  async updateSignupByEmail(email: string, fields: Airtable.FieldSet) {
    const record = await this.findByEmail(email);
    if (!record) return null;
    return this.updateRecord(record.id, fields);
  }

  async upsertSignupByEmail(email: string, fields: Airtable.FieldSet) {
    const record = await this.findByEmail(email);
    if (record) {
      return this.updateRecord(record.id, fields);
    }
    return this.createRecord({ email, ...fields });
  }
}
