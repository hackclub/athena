import Airtable from 'airtable';
import { Event, AirtableEventRecord } from '@/types';

export class AirtableManager {
  public base: Airtable.Base;
  public tableName: string;

  constructor(tableName: string, apiKey:string, baseId:string) {
    this.base = new Airtable({ apiKey: apiKey }).base(baseId!);
    this.tableName = tableName;
  }

  async getLatestRecord() {
    const records = await this.base(this.tableName).select({
      sort: [{ field: 'order', direction: 'desc' }],
      maxRecords: 1
    }).all();

    return records[0];
  }

  async getAllRecords(orderByThisField:string) {
    const records = await this.base(this.tableName).select({
      sort: [{ field: orderByThisField, direction: 'asc' }],
    }).all();

    return records;
  }
}

export class AirtableSpotlightManager extends AirtableManager {
  constructor() {
    super('Spotlight Posts', process.env.AIRTABLE_GENERAL_API_KEY!, process.env.AIRTABLE_GENERAL_BASE_ID!);
  }

  getLatestSpotlight() {
    return this.getLatestRecord();
  }
}

export class AirtableEventsManager extends AirtableManager {
  constructor() {
    super('Events', process.env.AIRTABLE_EVENTS_API_KEY!, process.env.AIRTABLE_EVENTS_BASE_ID!);
  }

  getLatestEvent() {
    return this.getLatestRecord();
  }

  getAllEvents() {
    return this.getAllRecords('Start Date')
  }


}
