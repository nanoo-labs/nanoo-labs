import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Nanoo Labs",
  EMAIL: "hi@nanoolabs.dev",
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

export const CONTRIBUTOR: Metadata = {
  TITLE: "Contributor",
  DESCRIPTION: "people who contribute to nanoo labs.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/nanoolabs",
  },
  {
    NAME: "github",
    HREF: "https://github.com/nanoolabs",
  },
  {
    NAME: "instagram",
    HREF: "https://www.instagram.com/nanoolabs",
  },
];
