import { atom } from "recoil";

const isUsingDDL = atom({
    key: "usingDDL",
    default: false,
});

export default isUsingDDL;
