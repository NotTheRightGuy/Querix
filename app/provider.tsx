"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { RecoilRoot } from "recoil";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <RecoilRoot>{children}</RecoilRoot>
        </ClerkProvider>
    );
}
