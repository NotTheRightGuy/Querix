"use client";
import useCurrentChatMessage from "@/store/hook/useCurrentChatMessage";
import AiReply from "./AiReply";
import UserReply from "./userReply";
import SQLQuery from "./sqlQuery";
import EmptyState from "../ui/emptyState";
import useIsUsingDDL from "@/store/hook/useIsUsingDDL";

export default function ChatContainer() {
    const messages = useCurrentChatMessage();
    const { usingDDL } = useIsUsingDDL();

    return (
        <div
            className={`mb-16 mt-20 px-4 flex flex-col pb-52 ${
                usingDDL ? "w-[92vw]" : "w-[65vw]"
            } overflow-y-auto scrollbar-hide
        }`}
        >
            {messages.length === 0 && <EmptyState />}
            {messages.map(
                (message: {
                    type: string;
                    message: string;
                    isLoading: boolean;
                }) => {
                    if (message.type === "ai") {
                        return (
                            <AiReply
                                key={Math.random()}
                                message={message.message}
                                isLoading={message.isLoading}
                            />
                        );
                    } else if (message.type === "user") {
                        return (
                            <UserReply
                                key={Math.random()}
                                message={message.message}
                            />
                        );
                    } else if (message.type === "code") {
                        return (
                            <SQLQuery
                                key={Math.random()}
                                query={message.message}
                            />
                        );
                    }
                }
            )}
        </div>
    );
}
