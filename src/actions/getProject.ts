"use server";

import { filterProject } from "@/lib/filterProjects";
import { Project } from "@think-zambia-foundation/api";

export const getProject = async (projectId: string, organisationId: string) => {
  try {
    const options = {
      // Option to revalidate the data stored in cache
      next: { revalidate: 3600 },
      headers: new Headers({
        "x-api-key": `${process.env.TZ_API_KEY}`,
      }),
    };

    const res = await fetch(
      `${process.env.CORE_API}/organisation/${organisationId}/projects/${projectId}`,
      options
    );
    const json = await res.json();
    const project = json?.data as Project;
    return project ? filterProject(project) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
