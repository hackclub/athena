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
          projectName:
            projectRecord.fields["project_name_override"]?.split("–")[0] ||
            projectRecord.fields["Project Name"] ||
            "",
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
    .filter((project): project is Project => project !== undefined);
}

export async function getProjects(
  page: number = 1,
  limit: number = 20
): Promise<{ projects: Project[]; total: number; totalPages: number }> {
  const allProjects = await fetchProjectsfromAirtable();
  const total = allProjects.length;
  const totalPages = Math.ceil(total / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const projects = allProjects.slice(startIndex, endIndex);

  return { projects, total, totalPages };
}

export async function getAllProjects(): Promise<Project[]> {
  return await fetchProjectsfromAirtable();
}
