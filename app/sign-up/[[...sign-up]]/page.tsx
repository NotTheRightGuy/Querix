import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation"; // Import next/navigation instead of next/router

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp path="/sign-up" />
    </div>
  );
}