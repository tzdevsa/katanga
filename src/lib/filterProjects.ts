import { Project } from "@think-zambia-foundation/api";

export const filterProjects = (project: Project[]) => {
  return project
    .filter((project) => !project?.archived)
    .map((project) => {
      const filteredImages =
        project.images?.filter((image) => !image?.archived) ?? [];
      project.images = filteredImages;
      return project;
    });
};

export const filterProject = (project: Project) => {
  if (project?.archived) {
    return null;
  } else {
    const filteredImages =
      project.images?.filter((image) => !image?.archived) ?? [];
    project.images = filteredImages;
    return project;
  }
};
