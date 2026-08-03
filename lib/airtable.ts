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
    this.base = new Airtable({ apiKey: apiKey }).base(baseId!);
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
