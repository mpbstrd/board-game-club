import { useAppContext } from '../context/AppContext'
import { ScheduleIcon, VenueIcon, PlayerCountIcon } from '../assets/icons'
// import { useState } from 'react'
// import { RadioGroup } from '@headlessui/react'

export default function Dashboard() {
    const { upcomingEvent } = useAppContext()

    // const venues = [
    //     { id: 'alice', name: 'Alice’s House' },
    //     { id: 'bob', name: 'Bob’s House' },
    //     { id: 'charlie', name: 'Charlie’s House' },
    // ]

    var totalVotes = upcomingEvent.going.length + upcomingEvent.maybe.length + upcomingEvent.cant.length
    var dateToday = new Date()
    var dateTodayFormatted = dateToday.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    var upcomingEventDate = upcomingEvent.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    var upcomingEventWeekdate = upcomingEvent.date.toLocaleDateString('en-US', { weekday: 'long' }).toLocaleUpperCase()

    return(
        <div className="flex flex-col w-full min-h-screen p-4 sm:p-6 lg:p-10">

            {/* Header */}
            <div className="flex flex-col gap-1 p-4 sm:p-5 w-full">
                <span className="[font-family:var(--mono)] text-[var(--text-3)] text-[11px]">
                    THIS {upcomingEventWeekdate} · {dateTodayFormatted}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center w-full gap-3 sm:gap-5">
                    <span className="[font-family:var(--heading)] font-medium text-2xl md:text-[34px] lg:text-[40px] leading-tight">
                        Game night at {upcomingEvent.venue}
                    </span>

                    <div className="sm:ml-auto flex overflow-hidden rounded-lg border border-[var(--border)] shadow-sm self-start shrink-0">
                        <button type="button" className="bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-center text-sm font-medium text-[var(--text-2)] hover:text-[var(--in-text)] transition-colors">I'm in</button>
                        <button type="button" className="bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-center text-sm font-medium text-[var(--text-2)] border-x border-[var(--border)] hover:text-[var(--maybe-text)] transition-colors">Maybe</button>
                        <button type="button" className="bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-center text-sm font-medium text-[var(--text-2)] hover:text-[var(--out-text)] transition-colors">Can't</button>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col lg:flex-row items-start gap-5 p-4 sm:p-5 w-full">

                <div className="flex-1 flex flex-col min-w-0 w-full">

                    {/* Upcoming event card */}
                    <div className="relative flex flex-col p-5 sm:p-7 mb-5 bg-[var(--surface)] border border-[var(--border)] rounded-[18px] overflow-hidden min-h-[150px] sm:min-h-[170px]">
                        <img
                            src={upcomingEvent.mainGameImageUrl}
                            alt={upcomingEvent.mainGame}
                            className="sm:block absolute right-0 top-0 h-auto sm:h-full w-full sm:w-auto cover opacity-20 sm:opacity-70"
                        />
                        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-y-2 relative z-10">
                            <div className="flex items-center">
                                <ScheduleIcon size={18} className="text-[var(--accent)] shrink-0" />
                                <span className="ml-2 text-[var(--text-1)] text-sm sm:text-base sm:mr-4">{upcomingEventDate} · {upcomingEvent.time}</span>
                            </div>
                            <div className="flex items-center">
                                <VenueIcon size={18} className="text-[var(--accent)] shrink-0" />
                                <span className="ml-2 text-[var(--text-1)] text-sm sm:text-base sm:mr-4">{upcomingEvent.venue}</span>
                            </div>
                            <div className="flex items-center">
                                <PlayerCountIcon size={18} className="text-[var(--accent)] shrink-0" />
                                <span className="ml-2 text-[var(--text-1)] text-sm sm:text-base sm:mr-4">{upcomingEvent.going.length} coming · {upcomingEvent.maybe.length} maybe</span>
                            </div>
                        </div>
                        <div className="flex flex-col mt-8 sm:mt-12 relative z-10">
                            <span className="[font-family:var(--mono)] text-[var(--text-3)] text-[11px]">TONIGHT'S MAIN GAME</span>
                            <span className="[font-family:var(--heading)] text-[var(--text-1)] text-[22px] sm:text-[26px]">{upcomingEvent.mainGame}</span>
                        </div>
                    </div>

                    {/* Voting */}
                    <div className="flex flex-col p-5 sm:p-7 bg-[var(--surface)] border border-[var(--border)] rounded-[18px] min-h-[200px] lg:min-h-[500px]">
                        <div className="flex flex-row justify-between">
                           <span className="[font-family:var(--mono)] text-[var(--text-3)] text-[12px] sm:text-[16px]">LIVE VOTE</span> 
                           <span className="[font-family:var(--mono)] text-[var(--text-3)] text-[12px] sm:text-[16px]">{totalVotes} votes</span> 
                        </div>
                        <div>
                           <span className="[font-family:var(--heading)] font-medium text-[var(--text-1)] text-[20px] sm:text-[24px]">Where are we playing?</span> 
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                {/* Who's coming */}
                <div className="flex flex-col w-full lg:w-[320px] lg:shrink-0 p-5 sm:p-7 bg-[var(--surface)] border border-[var(--border)] rounded-[18px] min-h-[200px] lg:min-h-[560px]">
                </div>
            </div>
        </div>
    )
}
