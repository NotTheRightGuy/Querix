import Sidebar from "../ui/sidebar";
import ChatInput from "../chats/chatInput";
import Terminal from "../ui/terminal";
import Header from "../ui/header";
import ChatContainer from "../chats/chatContainer";

export function Dashboard() {
    return (
        <div className="pl-24 flex">
            <Sidebar />
            <div className="grid grid-cols-1 h-screen relative">
                <Header />
                <ChatContainer />
                <ChatInput />
            </div>
            <div className="fixed right-0 w-1/4">
                <Terminal />
            </div>
        </div>
    );
}
