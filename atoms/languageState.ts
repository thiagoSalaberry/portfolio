import { atom } from "recoil";

export const languajeState = atom<Language>({
  key: "laguage",
  default: "es",
});
