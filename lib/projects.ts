import { AirtableProjectsManager } from "./airtable";
import { AirtableProjectRecord, Project } from "@/types";
import uploadUrlToCdn from "./cdn";

export async function fetchProjectsfromAirtable() {
  const data = await new AirtableProjectsManager().getAllProjects();

  return data
    .map((record) => {
      const projectRecord = record as unknown as AirtableProjectRecord;

      if (projectRecord.fields) {
        return {
          id: projectRecord.id,
          githubUsername: projectRecord.fields["GitHub Username"],
          projectName: projectRecord.fields["Project Name"] || "",
          description: projectRecord.fields["Description"],
          codeUrl: projectRecord.fields["Code URL"],
          playableUrl: projectRecord.fields["Playable URL"],
          imageUrl: projectRecord.fields["screenshot_cdn_url"],
          hoursSpent: projectRecord.fields["Optional - Override Hours Spent"],
          status: projectRecord.fields.status,
        } as Project;
      }
      return undefined;
    })
    .filter((project): project is Project => project !== undefined);
}

export async function getProjects(): Promise<Project[]> {
  return await fetchProjectsfromAirtable();
}
