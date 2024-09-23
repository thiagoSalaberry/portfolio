import { atom } from "recoil";
import { RecoilThemeProps } from "../types";

export const themeAtom = atom<RecoilThemeProps>({
  key: "themeState",
  default: "light",
});
