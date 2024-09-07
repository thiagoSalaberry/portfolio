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
  onClick: () => void;
};
