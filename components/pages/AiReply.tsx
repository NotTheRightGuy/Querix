import Avatar from "@/public/avatar";

export default function AiReply() {
    <div className="flex gap-2 ">
        <Avatar></Avatar>
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-between">
                <p>Leena AI</p>
                <p className="text-gray-500">4:23 PM</p>
            </div>
            <div className="rounded-xl rounded-tl-none bg-blue-500 p-2.5 text-sm">
                Processing your request to fetch the data. Please wait a moment
                while we analyze your query and prepare the results for you.
            </div>
        </div>
    </div>;
}
