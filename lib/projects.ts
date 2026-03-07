import { AirtableProjectsManager } from "./airtable";
import { AirtableProjectRecord, Project } from "@/types";
import uploadUrlToCdn from "./cdn";

const offsetCache: Record<number, string> = {};

export async function fetchProjects(page: number) {

  const newOffset = offsetCache[page] ?? "";

  const {records,offset} = await new AirtableProjectsManager().getAllProjects(newOffset, 200, 20);

  if (offset) offsetCache[page + 1] = offset;

  return {projects: records
    .map((record: AirtableProjectRecord) => {
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
          country: projectRecord.fields.Country,
          stateOrProvince: projectRecord.fields["State / Province"],
        } as Project;
      }
      return undefined;
    })
    .filter((project): project is Project => project !== undefined), offset: offset};
}

export async function fetchProjectsByGithubUsername(githubUsername: string) {
  const records = await new AirtableProjectsManager().getProjectsByGithubUsername(githubUsername);
  return records.map((record: AirtableProjectRecord) => {
    const projectRecord = record as unknown as AirtableProjectRecord;
    return {
      id: projectRecord.id,
      githubUsername: projectRecord.fields["GitHub Username"],
      projectName: projectRecord.fields["Project Name"],
      description: projectRecord.fields["Description"],
      codeUrl: projectRecord.fields["Code URL"],
      playableUrl: projectRecord.fields["Playable URL"],
      hoursSpent: projectRecord.fields["Optional - Override Hours Spent"],
    } as Project;
  });
}

export async function fetchProjectById(projectId: string) {
  const record = await new AirtableProjectsManager().getProjectById(projectId);
  const projectRecord = record as unknown as AirtableProjectRecord;
  return {
    id: projectRecord.id,
    githubUsername: projectRecord.fields["GitHub Username"],
    projectName: projectRecord.fields["Project Name"],
    description: projectRecord.fields["Description"],
    codeUrl: projectRecord.fields["Code URL"],
    playableUrl: projectRecord.fields["Playable URL"],
    hoursSpent: projectRecord.fields["Optional - Override Hours Spent"],
  } as Project;
}