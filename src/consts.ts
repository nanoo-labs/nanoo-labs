import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Nanoolabs",
  DESCRIPTION: "Nanoolabs | Build fast, simple, and scalable.",
  EMAIL: "hi@nanoolabs.dev",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://x.com/nanoolabs",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/nanoolabs",
  },
  {
    NAME: "Instagram",
    HREF: "https://www.instagram.com/nanoolabs",
  },
  {
    NAME: "Email",
    HREF: "mailto:hi@nanoolabs.dev",
  },
];
