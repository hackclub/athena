import Airtable from "airtable";
//import uploadUrlToCdn from "./cdn";
import { AirtableProjectRecord } from "@/types";

export class AirtableManager {
  public base: Airtable.Base;
  public tableName: string;
  private apiKey: string;
  private baseId: string;

  constructor(tableName: string, apiKey: string, baseId: string) {
    this.base = new Airtable({ apiKey: apiKey }).base(baseId!);
    this.tableName = tableName;
    this.apiKey = apiKey;
    this.baseId = baseId;
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


  async getAllRecords(orderByThisField: string, filterByThisField: string, offset: string, maxRecords: number, pageSize: number) {
    let url = `https://api.airtable.com/v0/${this.baseId}/${encodeURIComponent(this.tableName)}?sort[0][field]=${encodeURIComponent(orderByThisField)}&sort[0][direction]=asc&maxRecords=${maxRecords}&pageSize=${pageSize}&filterByFormula=${encodeURIComponent(filterByThisField)}`;

    if (offset) url += `&offset=${offset}`;

    const response = await fetch(url, { headers: { Authorization: `Bearer ${this.apiKey}` } });
    const data = await response.json();


    if (!response.ok || data.error) {
      console.error("[Airtable] getAllRecords failed:", response.status, data.error ?? data);
      return { records: [], offset: undefined };
    }
    const records = Array.isArray(data.records) ? data.records : [];
    return { records, offset: data.offset };
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
    return this.getAllRecords("Start Date", "{Status_Formula} = 'Complete'", "", 100, 100);
  }
}


export class AirtableProjectsManager extends AirtableManager {
  constructor() {
    super(
      "YSWS Project Submission",
      process.env.AIRTABLE_PROJECTS_API_KEY!,
      process.env.AIRTABLE_PROJECTS_BASE_ID!
    );
  }

  async getAllProjects(
    offsetString: string,
    maxRecords: number,
    pageSize: number
  ): Promise<{records: AirtableProjectRecord[],offset?: string}> {
    const {records,offset} = await this.getAllRecords("created_at", "{status} = 'approved'", offsetString, maxRecords, pageSize)
    
    return {records: records as unknown as AirtableProjectRecord[],offset: offset as string | undefined};
  }

  async getProjectsByGithubUsername(githubUsername: string) {
    const records = await this.base(this.tableName)
      .select({
        filterByFormula: `{GitHub Username} = "${githubUsername}"`,
        maxRecords: 100,
        view: "Grid View",
      })
      .all();
    return records as unknown as AirtableProjectRecord[];
  }

  async getProjectById(projectId: string) {
    const record = await this.base(this.tableName).find(projectId);
    return record as unknown as AirtableProjectRecord;
  }

  /*
  async getAllProjects(offset: number, maxRecords: number): Promise<AirtableProjectRecord[]> {
    const data = await this.getProjects(offset, maxRecords, 20);
    const approvedData = data.filter(
      (record) => record.fields["status"] === "approved"
    );
    await Promise.all(
      approvedData.map(async (record: any) => {
        const projectRecord = record as unknown as AirtableProjectRecord;

        // Only process if screenshot_cdn_url is empty and there's a screenshot URL
        if (
          !projectRecord.fields["screenshot_cdn_url"] &&
          projectRecord.fields["Screenshot"]?.[0]?.url
        ) {
          try {
            const imageUrl = await uploadUrlToCdn(
              projectRecord.fields["Screenshot"][0].url
            );

            // Update the record with the CDN URL
            if (imageUrl) {
              await this.base(this.tableName).update(projectRecord.id, {
                screenshot_cdn_url: imageUrl,
              });
            }
          } catch (error) {
            console.error(
              `Failed to process CDN upload for record ${projectRecord.id}:`,
              error
            );
          }
        }
      })
    );

    return approvedData.map(
      (record) => record as unknown as AirtableProjectRecord
    );
  }
*/

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
}

export class AirtableUsersManager extends AirtableManager {
  constructor() {
    super(
      "Registered Users",
      process.env.AIRTABLE_PROJECTS_API_KEY!,
      process.env.AIRTABLE_PROJECTS_BASE_ID!
    );
  }
  async getQualifiedUserById(id: string) {
    const sanitised_id = id
      .replace(/"/g, '\\"')
      .replace(/'/g, "\\'")
      .replace(/\r/g, '')
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/\t/g, '\\t')

    const records = await this.base(this.tableName)
      .select({
        filterByFormula: `{cert_id} = "${sanitised_id}"`,
        maxRecords: 1,
        view: "Qualifications",
        fields: [
          "total_time_approved_projects",
          "Code URL",
          "Playable URL",
          "Code URL Unified",
          "Playable URL Unified",
          "screenshot_cdn_url",
          "Description",
          "Project Name",
          "First Name",
          "Last Name Initial",
          "total_time_approved_projects",
          "total_approved_projects",
          "created_at",
          "approved_duration",
          "screenshot_cdn_url_unified",
          "approved_duration_unified",
          "Project Name Unified",
          "created_at_unified"
        ]
      })
      .all();
      return records[0]["fields"] || null
  }
}
