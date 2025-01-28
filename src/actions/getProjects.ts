"use server";

import { Project } from "@think-zambia-foundation/api";
import { filterProjects } from "./filterProjects";

export const getProjects = async (organisationId: string) => {
  try {
    const options = {
      // Option to revalidate the data stored in cache
      next: { revalidate: 3600 },
      headers: new Headers({
        "x-api-key": `${process.env.TZ_API_KEY}`,
      }),
    };
    const res = await fetch(
      `${process.env.CORE_API}/organisation/${organisationId}/projects`,
      options
    );
    const json = await res.json();
    const projects = (json?.data as Project[]) ?? [];

    // try to sort by project end date
    projects.sort((a, b) => (a.endDate && b.endDate) ? parseInt(b.endDate) - parseInt(a.endDate) : 0)
    return filterProjects(projects);
  } catch (error) {
    console.error(error);
    return [];
  }
};
