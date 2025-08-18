import Airtable from "airtable";
import uploadUrlToCdn from "./cdn";
import { AirtableProjectRecord } from "@/types";

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

export class AirtableSpotlightManager extends AirtableManager {
  constructor() {
    super(
      "Spotlight Posts",
      process.env.AIRTABLE_GENERAL_API_KEY!,
      process.env.AIRTABLE_GENERAL_BASE_ID!
    );
  }

  getLatestSpotlight() {
    return this.getLatestRecord();
  }
}

export class AirtableEventsManager extends AirtableManager {
  constructor() {
    super(
      "Events",
      process.env.AIRTABLE_EVENTS_API_KEY!,
      process.env.AIRTABLE_EVENTS_BASE_ID!
    );
  }

  getLatestEvent() {
    return this.getLatestRecord();
  }

  getAllEvents() {
    return this.getAllRecords("Start Date");
  }
}

export class AirtableProjectsManager extends AirtableManager {
  private projectsCache: AirtableProjectRecord[] | null = null;
  private cacheTimestamp: number = 0;
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  constructor() {
    super(
      "YSWS Project Submission",
      process.env.AIRTABLE_PROJECTS_API_KEY!,
      process.env.AIRTABLE_PROJECTS_BASE_ID!
    );
  }

  async getAllProjects(): Promise<AirtableProjectRecord[]> {
    const data = await this.getAllRecords("created_at");
    const approvedData = data.filter(
      (record) => record.fields["status"] === "approved"
    );

    return approvedData.map(
      (record) => record as unknown as AirtableProjectRecord
    );
  }

  // Get all approved projects with caching
  private async getAllApprovedProjects(): Promise<AirtableProjectRecord[]> {
    // Check if cache is still valid
    if (
      this.projectsCache &&
      Date.now() - this.cacheTimestamp < this.CACHE_TTL
    ) {
      return this.projectsCache;
    }

    // Fetch fresh data
    const allRecords = await this.base(this.tableName)
      .select({
        filterByFormula: `{status} = "approved"`,
        sort: [{ field: "created_at", direction: "desc" }],
      })
      .all();

    this.projectsCache = allRecords.map(
      (record) => record as unknown as AirtableProjectRecord
    );
    this.cacheTimestamp = Date.now();

    return this.projectsCache;
  }

  // Fixed pagination method using Airtable's cursor-based pagination
  async getProjectsByPage(
    page: number,
    pageSize: number
  ): Promise<AirtableProjectRecord[]> {
    const allRecords = await this.getAllApprovedProjects();

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return allRecords.slice(startIndex, endIndex);
  }

  // Get total count of approved projects
  async getTotalProjectCount(): Promise<number> {
    const allRecords = await this.getAllApprovedProjects();
    return allRecords.length;
  }

  async getProjectById(projectId: string) {
    return await this.base(this.tableName).find(projectId);
  }
}

export class AirtableProfilesManager extends AirtableManager {
  constructor() {
    super(
      "YSWS Project Submissions",
      process.env.AIRTABLE_PROJECTS_API_KEY!,
      process.env.AIRTABLE_PROJECTS_BASE_ID!
    );
  }

  async getProfileByGithubUsername(githubUsername: string) {
    const records = await this.base(this.tableName)
      .select({
        filterByFormula: `{GitHub Username} = "${githubUsername}"`,
        maxRecords: 1,
        view: "Grid View",
      })
      .all();
    return records[0] || null;
  }

  async getProfileByRecordId(recordId: string) {
    return await this.base(this.tableName).find(recordId);
  }
}
