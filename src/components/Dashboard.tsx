import { useAppContext } from '../context/AppContext'
import { ScheduleIcon, VenueIcon, PlayerCountIcon, VotedIcon } from '../assets/icons'

export default function Dashboard() {
    const { upcomingEvent } = useAppContext()

    return(
        <div className="flex flex-col w-full h-screen p-5 m-10 ">

            {/* Header */}
            <div className="flex flex-col gap-1 p-5 w-full">
                <span className="[font-family:var(--mono)] text-[var(--text-3)] text-[11px]">THIS {upcomingEvent.date.toLocaleDateString('en-US', { weekday: 'long' }).toLocaleUpperCase()} · June 6, 2026</span>
                <div className="flex flex-row items-center w-full">
                    <span className="[font-family:var(--heading)] font-medium text-[40px]">Game night at {upcomingEvent.venue}</span>

                    <div className="ml-auto flex overflow-hidden rounded-lg border border-[var(--border)] shadow-sm">
                        <button type="button" className="bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 hover:text-[var(--in-text)]">I'm in</button>
                        <button type="button" className="bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 hover:text-[var(--maybe-text)]">Maybe</button>
                        <button type="button" className="bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 hover:text-[var(--out-text)]">Can't</button>
                    </div>

                </div>
            </div>

            {/* Body */}
            <div className="flex flex-row items-start gap-5 p-5 w-full h-full">

                <div className="flex-1 flex-col bg-black-100">

                    {/* Upcoming event */}
                    <div className="relative flex flex-col h-[170px] p-7 mb-5 bg-[var(--surface)] border-[var(--border)] rounded-[18px] overflow-hidden">
                        <img src={upcomingEvent.mainGameImageUrl} alt={upcomingEvent.mainGame} className="absolute right-0 top-0 h-full w-auto object-cover opacity-70" />
                        <div className="flex flex-row">
                            <ScheduleIcon size={18} className="text-[var(--accent)]" />
                            <span className="ml-2 items-center text-[var(--text-1)] mx-4">{upcomingEvent.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            <VenueIcon size={18} className="text-[var(--accent)]" />
                            <span className="ml-2 items-center text-[var(--text-1)] mx-4">{upcomingEvent.venue}</span>
                            <PlayerCountIcon size={18} className="text-[var(--accent)]" />
                            <span className="ml-2 items-center text-[var(--text-1)] mx-4">{upcomingEvent.going.length} coming · {upcomingEvent.maybe.length} maybe</span>
                        </div>
                        <div className="flex flex-row mt-12">
                            <span className="[font-family:var(--mono)] text-[var(--text-3)] text-[11px]">TONIGHT'S MAIN GAME</span>
                        </div>
                        <div className="flex flex-row">
                            <span className="[font-family:var(--heading)] text-[var(--text-1)] text-[26px]">{upcomingEvent.mainGame}</span>
                        </div>
                    </div>

                    {/* Voting */}
                    <div className="flex h-[500px] p-7 bg-[var(--surface)] border-[var(--border)] rounded-[18px]">
                        Voting and recommendations
                    </div>
                </div>

                {/* Who's coming */}
                <div className="flex flex-col h-[560px] w-[320px] shrink-0 p-7 bg-[var(--surface)] border-[var(--border)] rounded-[18px]">
                    
                </div>
            </div>
        </div>
    )
}