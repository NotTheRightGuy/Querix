"use client";
import ChatHistory from "@/components/chats/chatHistory";
import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import React from "react";

function ChatHistoryPage() {
  return (
    <div className="pl-24 flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar currPage="Chat History" />
        <header className="w-full px-4">
          <h1 className="text-3xl font-bold">Chat History</h1>
        </header>
        <h3 className="text-gray-700 px-4 mt-2">Today's </h3>
        <div>
          <ChatHistory heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" messages="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" />
          <ChatHistory heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" messages="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" />
          <ChatHistory heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" messages="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" />
          <ChatHistory heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" messages="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" />
          <ChatHistory heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" messages="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" />
        </div>
        <h3 className="text-gray-700 px-4 mt-2">Yesterday's </h3>
        <div>
          <ChatHistory heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" messages="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" />
          <ChatHistory heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" messages="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" />
          <ChatHistory heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" messages="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" />
          <ChatHistory heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" messages="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" />
          <ChatHistory heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" messages="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sunt?" />
        </div>
      </div>
    </div>
  );
}

export default ChatHistoryPage;
