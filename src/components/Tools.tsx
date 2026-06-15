import { use, useState } from "react"


export default function Tools() {
    const [event, setEvent] = useState("")
    return(
        <div className="flex flex-col max-w-[1200px] min-h-screen p-4 sm:p-6 lg:p-10 mx-auto">

            <div className="flex flex-col gap-1 p-4 sm:p-5 w-full">
                <div className="[font-family:var(--mono)] text-[var(--text-3)] text-[11px] uppercase">
                    All the tools you need 
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center w-full gap-3 sm:gap-5">
                    <span className="[font-family:var(--heading)] font-medium text-2xl md:text-[34px] lg:text-[40px] leading-tight">Admin Tools</span>
                </div>
            </div>

            <div className="flex flex-row">
                <span>Sync game data from BGG: </span>
                <button className="">Synchronize</button>
            </div>
        </div>
    )
}