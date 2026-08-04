import { AirtableStoriesManager } from "./airtable";
import { MemberStory, AirtableStoryRecord } from "@/types";

function toMemberStory(record: AirtableStoryRecord): MemberStory {
  return {
    name: record.fields.name!.trim(),
    age: record.fields.age,
    city: record.fields.city,
    image: record.fields.image,
    story: record.fields.story,
  };
}

export async function getMemberStories(): Promise<MemberStory[]> {
  const manager = new AirtableStoriesManager();

  let records;
  try {
    records = await manager.getAllStories();
  } catch (error) {
    console.error("Failed to fetch member stories from Airtable:", error);
    return [];
  }

  return records
    .map((record) => record as unknown as AirtableStoryRecord)
    .filter((record) => record.fields.name)
    .map(toMemberStory);
}
