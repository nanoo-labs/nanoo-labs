import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Nanoo",
  EMAIL: "dev@nanoo.cloud",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Nanoo Labs - Built to be fast, simple, and scalable.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on Nanoo Labs",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/nanoo.labs",
  },
  {
    NAME: "github",
    HREF: "https://github.com/nanoo-labs",
  },
  {
    NAME: "instagram",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  },
];
