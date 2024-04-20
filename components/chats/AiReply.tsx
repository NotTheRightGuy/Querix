import Avatar from "@/public/avatar";

export default function AiReply() {
    return (
        <div className="flex gap-2 ">
            <Avatar />
            <div className="flex flex-col">
                <div className="flex w-full justify-between items-center">
                    <p className="font-medium">Quirx AI</p>
                    <p className="text-gray-500 text-sm">4:23 PM</p>
                </div>
                <div className="rounded-xl rounded-tl-none bg-blue-500 p-2.5 text-sm w-fit text-white">
                    Processing your request to fetch the data. Please wait a
                    moment while we analyze your query and prepare the results
                    for you.
                </div>
            </div>
        </div>
    );
}
