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
  const records = await manager.getAllStories();

  return records
    .map((record) => record as unknown as AirtableStoryRecord)
    .filter((record) => record.fields.name)
    .map(toMemberStory);
}
