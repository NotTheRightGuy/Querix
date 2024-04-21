import { useRecoilValue } from "recoil";
import terminalChat from "@/store/atom/terminalChat";

export default function useTerminalChat() {
    return useRecoilValue(terminalChat);
}
