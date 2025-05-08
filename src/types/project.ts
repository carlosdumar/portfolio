export type TechStack = {
  id: string;
  name: string;
  category?: "frontend" | "backend" | "database" | "devops" | "other";
  version?: string;
};
export type ProjectData = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: TechStack[];
  preview: {
    imageUrl: string;
    alt?: string;
  };
  links: {
    repository: string;
    liveSite?: string;
    designFiles?: string;
  };
  urlCode: string;
};

export type Project = {
  project: ProjectData[];
};

