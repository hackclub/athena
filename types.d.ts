import { setLazyProp } from "next/dist/server/api-utils";
import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

export interface TeamMember {
  name: string;
  role: string;
  slack: string;
  image: string;
}

interface AirtableTeamRecord {
  id: string;
  fields: {
    name?: string;
    cdn_image?: string;
    role?: string;
    slack?: string;
    slack_link?: string;
    status?: "active" | "acknowledgements";
  };
}

export interface MemberStory {
  name: string;
  age?: string;
  city?: string;
  image?: string;
  story?: string;
}

interface AirtableStoryRecord {
  id: string;
  fields: {
    name?: string;
    image?: string;
    age?: string;
    city?: string;
    story?: string;
  };
}
