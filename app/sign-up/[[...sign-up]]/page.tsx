import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp path="/sign-up" />
    </div>
  );
}