// lib/projectCache.ts
import { Project } from "@/types";

const cache = new Map<string, Project>();
const userCache = new Map<string, Project[]>();


export function cacheProject(project: Project) {
  cache.set(project.id, project);
}

export function getCachedProject(id: string): Project | undefined {
  return cache.get(id);
}

export function cacheUserProjects(githubUsername: string, projects: Project[]) {
    userCache.set(githubUsername, projects);
}
  
  export function getCachedUserProjects(githubUsername: string): Project[] | undefined {
    return userCache.get(githubUsername);
 }