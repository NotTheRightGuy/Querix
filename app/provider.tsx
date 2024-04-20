"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { RecoilRoot } from "recoil";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <TooltipProvider>
        <ClerkProvider>
            <RecoilRoot>{children}</RecoilRoot>
        </ClerkProvider>
        </TooltipProvider>
    );
}
