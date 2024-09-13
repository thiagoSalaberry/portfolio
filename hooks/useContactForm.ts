import { useState } from "react";

export const useContactForm = () => {
  const [form, setForm] = useState<{
    name: {
      value: string;
      missing: boolean;
    };
    email: {
      value: string;
      missing: boolean;
    };
    company: {
      value: string;
      missing: boolean;
    };
    message: {
      value: string;
      missing: boolean;
    };
  }>({
    name: {
      value: "",
      missing: false,
    },
    email: {
      value: "",
      missing: false,
    },
    company: {
      value: "",
      missing: false,
    },
    message: {
      value: "",
      missing: false,
    },
  });
  const [disabled, setDisabled] = useState<boolean>(false);
  return { form, setForm, disabled, setDisabled };
};
