import {atom} from "recoil";

const currentlyExecuting = atom({
    key: "currentlyExecuting",
    default: "echo 'Hello World'",
});

export default currentlyExecuting;
