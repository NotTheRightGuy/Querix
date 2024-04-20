import BlueFrame from "@/public/blueFrame"


export default function EmptyState(){
    return(
        <div className="h-full w-full flex flex-col gap-3 items-center justify-center">
            <BlueFrame>
            </BlueFrame>
            <h1 className="font-bold text-2xl">
            Start generating your queries.
            </h1>
            <p className="text-xl">
            Engage with Querix, your AI query partner.
            </p>
        </div>
    )
}
