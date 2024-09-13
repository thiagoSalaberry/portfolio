import { atom } from "recoil";
import { RecoilSectionProps } from "../types";

export const sectionAtom = atom<RecoilSectionProps>({
  key: "sectionState",
  default: "",
});
