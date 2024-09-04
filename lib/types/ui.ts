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

export type InputProps = {
  label?: string;
  type: "text" | "number" | "email" | "password";
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
  missing?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
};

export type TextareaProps = {
  label?: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
  missing?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
};