"use client";
import useCurrentChatMessage from "@/store/hook/useCurrentChatMessage";
import AiReply from "./AiReply";
import UserReply from "./userReply";
import EmptyState from "../ui/emptyState";

export default function ChatContainer() {
    const messages = useCurrentChatMessage();
    return (
        <div className="mb-16 mt-20 px-4 w-[68vw] flex flex-col ">
            {messages.length === 0 && <EmptyState />}
            {messages.map((message: { type: string; message: string }) => {
                if (message.type === "ai") {
                    return (
                        <AiReply
                            key={Math.random()}
                            message={message.message}
                        />
                    );
                } else {
                    return (
                        <UserReply
                            key={Math.random()}
                            message={message.message}
                        />
                    );
                }
            })}
        </div>
    );
}
