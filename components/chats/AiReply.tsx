import Avatar from "@/public/avatar";

export default function AiReply({ isLoading = false, message = "" }) {
    return (
        <div className="flex gap-2 mt-2">
            <Avatar />
            <div className="flex flex-col">
                <div className="flex w-full justify-between items-center">
                    <p className="font-medium">Quirx AI</p>
                </div>
                <div className="rounded-xl rounded-tl-none bg-blue-500 p-2.5 text-sm w-fit text-white">
                    {isLoading ? "Generating Query..." : message}
                </div>
            </div>
        </div>
    );
}
