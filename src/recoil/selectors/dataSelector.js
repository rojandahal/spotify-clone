import { selector } from "recoil";
import { songAtom } from "../atoms/loginAtom";
import { data } from "../../assets/json/data";

export const dataSelector = selector({
  key: "dataSelector",
  get: ({ get }) => {
    const songAt = get(songAtom);

    const song = data.items.find((item) => item.id === songAt.id);
    if (song === undefined) {
      return { song: null };
    } else return { song };
  },
});
