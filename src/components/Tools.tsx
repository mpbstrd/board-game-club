// import { useState } from "react"

function SynchronizeData() {
    return (
        alert('Hi')
    )
}

function AddGameToLibrary() {
    return (
        alert('Add a game')
    )
}

function Button({text, method} : {text: string; method: () => void}){
    return(
        <button className="className={`px-3 sm:px-4 py-2 sm:py-2.5 text-center text-sm font-medium transition-colors cursor-pointer bg-white text-[var(--text-2)] hover:text-[var(--accent)] rounded-lg border border-[var(--border)] `" 
                            onClick={method}>{text}</button>
    )
}

export default function Tools() {
    // const [event, setEvent] = useState("")
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
            
            <div>
                <div className="flex flex-row gap-3 mx-5 mb-5 items-center">
                    <span className="text-[18px]">Sync game data from BGG: </span>
                    <Button text="Synchronize" method={SynchronizeData} />
                </div>
                
                <div className="flex flex-row gap-3 mx-5 items-center">
                    <span className="text-[18px]">Add a game to the current library: </span>
                    <Button text="Add" method={AddGameToLibrary} />
                </div>
            </div>
            
        </div>
    )
}