import { atom } from "recoil";

const terminalChat = atom({
    key: "terminalChat",
    default: [
        {
            command: "echo 'Hello World'",
            output: "Hello World",
        },
    ],
});

export default terminalChat;
