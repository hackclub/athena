import { setLazyProp } from "next/dist/server/api-utils";
import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

export type Event = {
  id: string;
  name: string;
  status: "Complete" | "Active" | "Upcoming";
  description?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  logo?: string;
  photos?: Array<string>;
  photocreds?: string;
  githubLink?: string;
  website?: string;
};

interface AirtableEventRecord {
  id: string;
  fields: {
    Name: string;
    Status: "Complete" | "Active" | "Upcoming";
    Description?: string; // Optional
    Location?: string; // Optional
    ["Start Date"]?: string;
    ["End Date"]?: string;
    Logo?: string; // Optional
    Photos?: string; // Optional
    ["Photo Creds"]?: string; // Optional
    ["GitHub Link"]?: string; // Optional
    Website?: string; // Optional
    Ignored?: boolean; 
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

interface Project {
  id: string;
  githubUsername: string;
  projectName: string;
  description: string;
  codeUrl?: string;
  playableUrl?: string;
  imageUrl?: string;
  hoursSpent?: number;
  status: string;
  country: string;
  stateOrProvince: string;
  // Add more fields as needed
}

interface AirtableProjectRecord {
  id: string;
  fields: {
    "Code URL"?: string;
    Email: string;
    "GitHub Username": string;
    "Address (Line 1)"?: string;
    "Address (Line 2)"?: string;
    City?: string;
    "State / Province"?: string;
    Country?: string;
    "ZIP / Postal Code"?: string;
    "Code URL"?: string;
    Birthday?: string;
    "First Name": string;
    "Last Name": string;
    "Playable URL"?: string;
    Screenshot: AirtableImage[] | [];
    "Optional - Override Hours Spent"?: number;
    Description: string;
    "Automation - YSWS Record ID"?: string;
    status: "rejected" | "approved" | "unreviewed" | "";
    "Project Name"?: string;
    created_at?: string;
    screenshot_cdn_url?: string;
  };
}

type AirtableImage = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: {
      url: string;
      width: number;
      height: number;
    };
    large: {
      url: string;
      width: number;
      height: number;
    };
    full: {
      url: string;
      width: number;
      height: number;
    };
  };
};

interface Profile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  githubUsername: string;
  state?: string;
  country?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  // Add more fields as needed
}

export interface WIPEvent {
  name?: string;
  location: string;
  date: string;
  upcoming: true;
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
