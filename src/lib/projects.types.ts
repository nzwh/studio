export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
}

export interface ProjectSection {
  header: string;
  paragraphs: {
    content: string;
    media?: ProjectMedia[];
  }[];
}

export interface ProjectArticle {
  title: string;
  sections: ProjectSection[];
}

export type ProjectIcon = React.ComponentType<{
  className?: string;
  fill?: string;
  stroke?: string;
}>;

export interface Project {
  // the title of the project
  title: string;
  // 1-2 sentence description of the project
  description: string;
  // detailed summary of the project
  summary: string;

  // the type of project (ex. "side project", "collaborative work")
  project_type: string;
  // the type of work involved (ex. "design", "development")
  work_type: "design" | "development" | "full-stack";
  // estimated read time for the project summary (ex. "5m")
  read_time: string;
  // date the project was published (ex. "09-2025", "In Progress")
  duration: string;

  // list of tools used in the project
  stack: string[];
  // list of roles involved in the project
  roles: string[];

  // react component for the project's icon
  icon: ProjectIcon;
  // (optional) URL to the project's cover image
  cover?: string;
  // (optional) array of colors associated with the project
  colors?: string[];

  // (optional) article about the project
  article?: ProjectArticle;
}
