import { atom } from "recoil";

type Message = {
    type: string;
    message: string;
};

const currentChatMessage = atom<Message[]>({
    key: "currentChatMessage",
    default: [],
});

export default currentChatMessage;
