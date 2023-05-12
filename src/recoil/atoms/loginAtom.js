import { atom } from "recoil";

export const userDetailAtom = atom({
  key: "user",
  default: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
});

export const songAtom = atom({
  key: "song",
  default: [],
});

export const playAtom = atom({
  key: "play",
  default: null,
});
