type InputProps = {
  type: "text" | "email" | "number";
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  missing: boolean;
  onChange: (value: string) => void;
};
type TextAreaProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  missing: boolean;
  onChange?: (value: string) => void;
};
type ButtonProps = {
  which:
    | "Main"
    | "Secondary"
    | "TextButton"
    | "IconFilledButton"
    | "IconButton"
    | "CardButton";
  children: React.ReactNode;
  submitting?: boolean;
  onClick: () => void;
};

type ProjectCardProps = {
  title: string;
  description: string;
  techList: JSX.Element[];
  pageUrl: string;
  githubUrl: string;
};
type TechCardProps = {
  tech: string;
  image: string;
};

type TechLogoProps = {
  tech: string;
};

type NavigationProps = {
  href: string;
  icon: "github" | "arrow" | "linkedin";
  style: "card" | "button";
};

type LayoutProps = {
  children: React.ReactNode;
};
