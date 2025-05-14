import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

export type Event = {
    id: string;
    name: string, 
    status: "Complete" | "Active" | "Upcoming",
    description?: string, 
    location?: string, 
    startDate?: string,
    endDate?: string,
    logo?: string, 
    photos?: Array<string>,
    photocreds?: string;
    githubLink?: string;
    website?: string;
}

interface AirtableEventRecord {
    id: string;
    fields: {
      Name: string;
      Status: "Complete" | "Active" | "Upcoming";
      Description?: string; // Optional
      Location?: string; // Optional
      ['Start Date']?: string;
      ['End Date']?: string;
      Logo?: string; // Optional
      Photos?: string; // Optional
      ['Photo Creds']?: string; // Optional
      ['GitHub Link']?: string; // Optional
      Website?: string; // Optional
    };
    _table?: {
      _base: {
        _airtable: Record<string, unknown>;
        _id: string;
      };
      id: string | null;
      name: string;
    };
    _rawJson?: {
      id: string;
      createdTime: string;
      fields: Record<string, unknown>;
    };
  }


export interface WIPEvent {
  name?: string;
  location: string;
  date: string;
  upcoming: true
}

export interface EventWithColors extends Event {
  tagColor: string;
  logoPreviewBackgroundColor: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

