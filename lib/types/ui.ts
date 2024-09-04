export type ButtonProps = {
  type?: "button" | "submit";
  children: React.ReactNode;
  id?: string;
  disabled?: boolean;
  variant:
    | "main"
    | "secondary"
    | "tertiary"
    | "mainIcon"
    | "secondaryIcon"
    | "tertiaryIcon"
    | "main_icon"
    | "secondary_icon"
    | "tertiary_icon"
    | "text";
  onClick: () => void;
};
