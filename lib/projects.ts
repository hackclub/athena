import { AirtableProjectsManager } from "./airtable";
import { AirtableProjectRecord, Project } from "@/types";
import uploadUrlToCdn from "./cdn";

export async function fetchProjectsfromAirtable(
  page: number,
  pageSize: number
) {
  const data = await new AirtableProjectsManager().getProjectsByPage(
    page,
    pageSize
  );

  // Get total count for pagination
  const totalCount = await new AirtableProjectsManager().getTotalProjectCount();

  const hasNextPage = data.length === pageSize && page * pageSize < totalCount;
  const hasPreviousPage = page > 1;

  const projects = data
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
    })
    .filter((project): project is Project => project !== undefined);

  return {
    projects: projects,
    currentPage: page,
    pageSize,
    hasNextPage,
    hasPreviousPage,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
  };
}

export async function getProjects(
  page: number,
  limit: number
): Promise<{
  projects: Project[];
  currentPage: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalCount: number;
  totalPages: number;
}> {
  // fetchProjectsfromAirtable now handles pagination internally
  const result = await fetchProjectsfromAirtable(page, limit);
  return {
    projects: result.projects,
    currentPage: page,
    pageSize: result.pageSize,
    hasNextPage: result.hasNextPage,
    hasPreviousPage: result.hasPreviousPage,
    totalCount: result.totalCount,
    totalPages: result.totalPages,
  };
}


export async function getAllProjects(): Promise<Project[]> {
  const totalCount = await new AirtableProjectsManager().getTotalProjectCount();
  const result = await fetchProjectsfromAirtable(1,totalCount);
  return result.projects;
}

