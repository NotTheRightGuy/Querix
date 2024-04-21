"use client";
import Sidebar from "../ui/sidebar";
import ChatInput from "../chats/chatInput";
import Terminal from "../ui/terminal";
import Header from "../ui/header";
import ChatContainer from "../chats/chatContainer";
import { useRecoilValue } from "recoil";
import completedOnBoard from "@/store/atom/completedOnBoard";
import { OnBoarding } from "./OnBoarding";

export function Dashboard() {
  const onBoardComplete = useRecoilValue(completedOnBoard);

  return (
    <div className={`${onBoardComplete ? 'pl-20 ': ''} flex`}>
      <Sidebar />
      {onBoardComplete ? (
        <>
          <div className="grid grid-cols-1 h-screen relative">
            <Header />
            <ChatContainer />
            <ChatInput />
          </div>
        </>
      ) : (
        <OnBoarding />
      )}

      <div className="fixed right-0 w-1/4">
        <Terminal />
      </div>
    </div>
  );
}
