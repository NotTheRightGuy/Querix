//  create atom for last message
import { atom } from "recoil";

const lastMessage = atom({
  key: "lastMessage",
  default: "",
});
