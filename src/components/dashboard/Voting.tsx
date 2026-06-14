import type { UpcomingEvent } from "../../types"

type Props = {
    event: UpcomingEvent
}

export function VotingCard({event} : Props){
    const totalRsvps = event.going.length + event.maybe.length + event.cant.length

    return(
        <div className="flex flex-col p-5 sm:p-7 bg-[var(--surface)] border border-[var(--border)] rounded-[18px] min-h-[200px] lg:min-h-[500px]">
            <div className="flex flex-row justify-between">
                <span className="[font-family:var(--mono)] text-[var(--text-3)] text-[12px] sm:text-[16px]">LIVE VOTE</span>
                <span className="[font-family:var(--mono)] text-[var(--text-3)] text-[12px] sm:text-[16px]">{totalRsvps} votes</span>
            </div>
            <div>
                <span className="[font-family:var(--heading)] font-medium text-[var(--text-1)] text-[20px] sm:text-[24px]">Where are we playing?</span>
            </div>
            <div className='flex flex-1 items-center justify-center'>
                <span className='[font-family:var(--mono)] text-[var(--text-2)] text-[60px]'>WORK IN PROGRESS</span>
            </div>
        </div>
    )
}