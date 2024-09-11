import { atom } from "recoil";
import { RecoilLanguageProps } from "../types";

export const languageAtom = atom<RecoilLanguageProps>({
  key: "languageState",
  default: "es",
});
