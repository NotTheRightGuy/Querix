import { Input } from "@/components/ui/input";
import FileSpreadsheet from "@/public/file-spreadsheet";
import SendArrow from "@/public/sendArrow";

export default function ChatInput() {
    return (
        <div className="flex gap-2 h-fit">
            <Input className="focus:outline-none" />
            <div className="bg-gray-700 hover:bg-gray-900 duration-200 cursor-pointer  flex items-center w-11 justify-center rounded ">
                <SendArrow></SendArrow>
            </div>
            <div className="border-2 border-[#D1D5DB] hover:border-black duration-200 cursor-pointer flex items-center w-11 justify-center rounded">
                <FileSpreadsheet />
            </div>
        </div>
    );
}
