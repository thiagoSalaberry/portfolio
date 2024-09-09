import { StaticImageData } from "next/image";
import { HTMLProps } from "react";

export type ProjectProps = {
  index: number;
  title: string;
  description: string;
  techs: string[];
  link: string;
  githubLink: string;
};
export type SectionProps = {
  index: number;
  children: React.ReactNode;
  // className: string;
  title: string;
  sectionRef: React.RefObject<HTMLTableSectionElement>;
  mainRef: React.RefObject<HTMLElement>;
  opened: boolean;
  style: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  expandable?: boolean;
  onClick: () => void;
};

export type TechCardProps = {
  size: "small" | "large";
  title: string;
  tag: string;
  description: string;
  img: StaticImageData | string;
};
