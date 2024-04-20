import BlueFrame from "@/public/blueFrame";

export default function EmptyState() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <BlueFrame></BlueFrame>
            <h1 className="font-bold text-2xl mt-5">
                Start generating your queries.
            </h1>
            <p className="opacity-60 mt-1">
                Engage with Querix, your AI query partner.
            </p>
        </div>
    );
}
