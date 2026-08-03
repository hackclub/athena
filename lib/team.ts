import { AirtableTeamManager } from "./airtable";
import { TeamMember, AirtableTeamRecord } from "@/types";

function toTeamMember(record: AirtableTeamRecord): TeamMember {
  return {
    name: record.fields.name!.trim(),
    role: record.fields.role || "",
    slack: record.fields.slack_link || "",
    image: record.fields.cdn_image || "",
  };
}

const isActive = (record: AirtableTeamRecord) =>
  Boolean(record.fields.name) && record.fields.status === "active";

export async function getTeamData(): Promise<{
  members: TeamMember[];
  acknowledgements: TeamMember[];
}> {
  const manager = new AirtableTeamManager();

  const [viewRecords, allRecords] = await Promise.all([
    manager.getTeamPageMembers(),
    manager.getAllTeamMembers(),
  ]);

  // The curated view drives display order, but it can lag behind newly added
  // members — fall back to anyone active who's missing from it so nobody
  // silently disappears from the page.
  const orderedIds = new Set(viewRecords.map((record) => record.id));
  const orderedActiveRecords = [
    ...viewRecords.map((record) => record as unknown as AirtableTeamRecord).filter(isActive),
    ...allRecords
      .filter((record) => !orderedIds.has(record.id))
      .map((record) => record as unknown as AirtableTeamRecord)
      .filter(isActive),
  ];

  const members = orderedActiveRecords.map(toTeamMember);

  const acknowledgements = allRecords
    .map((record) => record as unknown as AirtableTeamRecord)
    .filter(
      (record) => record.fields.name && record.fields.status === "acknowledgements"
    )
    .map(toTeamMember);

  return { members, acknowledgements };
}
