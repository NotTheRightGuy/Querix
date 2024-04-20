import { useRecoilValue } from "recoil";
import currentChatMessage from "../atom/currentChatMessage";

export default function useCurrentChatMessage() {
    const currentMessage = useRecoilValue(currentChatMessage);
    return currentMessage
}
