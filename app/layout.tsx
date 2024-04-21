import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Querix | Generate and Execute SQL Queries",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Provider>
                <body className={`inter.className overflow-x-hidden`}>{children}</body>
            </Provider>
        </html>
    );
}
