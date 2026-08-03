import Airtable from "airtable";

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
