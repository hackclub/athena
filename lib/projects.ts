import { AirtableProjectsManager } from './airtable';
import { AirtableProjectRecord, Project } from '@/types'
import { formatDate } from '@/lib/utils'

export async function fetchProjects() {
  const data = await new AirtableProjectsManager().getAllProjects();
  
  return data.map((record) => {
    const projectRecord = record as unknown as AirtableProjectRecord;

    return {
        id: projectRecord.id,
        githubUsername: projectRecord.fields['GitHub Username'],
        projectName: `Project by ${projectRecord.fields['GitHub Username']}`,
        description: projectRecord.fields['Description'],
        codeUrl: projectRecord.fields['Code URL'],
        playableUrl: projectRecord.fields['Playable URL'],
        screenshot: projectRecord.fields['Screenshot'],
        hoursSpent: projectRecord.fields['Optional - Override Hours Spent'],
        status: projectRecord.fields['Automation - Status'],
    };
  });
}

export async function getProjects(): Promise<Project[]> {
    const projects = await fetchProjects();
    return projects
  }