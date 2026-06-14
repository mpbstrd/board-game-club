import { ScheduleIcon, VenueIcon, PlayerCountIcon } from '../../assets/icons'
import type { UpcomingEvent as UpcomingEventType } from '../../types'

type Props = {
    event: UpcomingEventType
    formattedDate: string
}

export function UpcomingEventCard({ event, formattedDate }: Props) {
    return(
        <div className="relative flex flex-col p-5 sm:p-7 mb-5 bg-[var(--surface)] border border-[var(--border)] rounded-[18px] overflow-hidden min-h-[150px] sm:min-h-[170px]">
            <img
                src={event.mainGameImageUrl}
                alt={event.mainGame}
                className="sm:block absolute right-0 top-0 h-auto sm:h-full w-full sm:w-auto cover opacity-20 sm:opacity-70"
            />
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-y-2 relative z-10">
                <div className="flex items-center">
                    <ScheduleIcon size={18} className="text-[var(--accent)] shrink-0" />
                    <span className="ml-2 text-[var(--text-1)] text-sm sm:text-base sm:mr-4">{formattedDate} · {event.time}</span>
                </div>
                <div className="flex items-center">
                    <VenueIcon size={18} className="text-[var(--accent)] shrink-0" />
                    <span className="ml-2 text-[var(--text-1)] text-sm sm:text-base sm:mr-4">{event.venue}</span>
                </div>
                <div className="flex items-center">
                    <PlayerCountIcon size={18} className="text-[var(--accent)] shrink-0" />
                    <span className="ml-2 text-[var(--text-1)] text-sm sm:text-base sm:mr-4">{event.going.length} coming · {event.maybe.length} maybe</span>
                </div>
            </div>
            <div className="flex flex-col mt-8 sm:mt-12 relative z-10">
                <span className="[font-family:var(--mono)] text-[var(--text-3)] text-[11px]">TONIGHT'S MAIN GAME</span>
                <span className="[font-family:var(--heading)] text-[var(--text-1)] text-[22px] sm:text-[26px]">{event.mainGame}</span>
            </div>
        </div>
    )
}
