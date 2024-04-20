import { atom } from "recoil";

type Message = {
    type: string;
    message: string;
    isLoading: boolean;
};

const currentChatMessage = atom<Message[]>({
    key: "currentChatMessage",
    default: [],
});

export default currentChatMessage;
