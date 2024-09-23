import { atom } from "recoil";

export const languajeState = atom<Language>({
  key: "languajeState",
  default: "es",
});
