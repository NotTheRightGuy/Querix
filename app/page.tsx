import GeminiIcon from "@/public/geminiIcon";
import HeroIcon from "@/public/heroIcon";
import HeroImage from "@/public/HeroImage";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-start flex-col">
        <header className="fixed top-0 right-0 z-[1000] bg-white h-24 w-full flex items-center justify-between py-2 px-8 border-b">
          <div className="absolute left-8 top-4 h-14">
            <HeroIcon />
          </div>
          <div className="flex flex-1 w-fit justify-center items-center gap-10 font-medium">
            <a href="">Home</a>
            <span className="font-normal text-[#636B744D]">|</span>
            <a href="">Features</a>
            <span className="font-normal text-[#636B744D]">|</span>
            <a href="">FAQs</a>
          </div>
          <button className="absolute right-8 rounded-md focus:outline-none font-medium bg-blue-700 text-white px-6 py-2">
            Login
          </button>
        </header>
        <div className="w-screen relative h-screen px-8 mt-40">
          <div className="flex flex-col gap-10 items-start justify-start w-1/2">
            <h1 className="text-5xl font-bold tracking-wide leading-[71px]">
              We revolutionize your SQL interaction experience with <br />
              our{" "}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500"
              >
                intuitive platform
              </span>
            </h1>
            <p className="text-gray-600 text-2xl">
              Elevate your database insights effortlessly with our AI-generated
              SQL queries. Simply converse with our AI to unlock the next level
              of data understanding.
            </p>
            <button
              style={{ boxShadow: "0px 12px 24px 0px rgba(5, 104, 203, 0.20)" }}
              className="bg-blue-700 font-normal text-white flex items-center justify-center p-3 gap-3 box rounded-xl"
            >
              <GeminiIcon />
              <span className="text-white text-2xl font-medium">
                Get Started
              </span>
              -it's free
            </button>
            <div className="absolute -top-44 right-0">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
