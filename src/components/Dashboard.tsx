import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { UpcomingEventCard } from './dashboard/UpcomingEvent'
import { AttendanceCard } from './dashboard/Attendance'
import { VotingCard } from './dashboard/Voting'

type RSVPStatus = 'going' | 'maybe' | 'cant'

export default function Dashboard() {
    const { currentUser, upcomingEvent } = useAppContext()
    const [event, setEvent] = useState(upcomingEvent)

    const totalVotes = event.going.length + event.maybe.length + event.cant.length
    const dateToday = new Date()
    const dateTodayFormatted = dateToday.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    const upcomingEventDate = event.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    const upcomingEventWeekdate = event.date.toLocaleDateString('en-US', { weekday: 'long' }).toLocaleUpperCase()

    const userStatus: RSVPStatus | null =
        event.going.includes(currentUser.id) ? 'going' :
        event.maybe.includes(currentUser.id) ? 'maybe' :
        event.cant.includes(currentUser.id)  ? 'cant'  : null

    const handleRsvp = (status: RSVPStatus) => {
        setEvent(prev => {
            const id = currentUser.id
            const going = prev.going.filter(x => x !== id)
            const maybe = prev.maybe.filter(x => x !== id)
            const cant  = prev.cant.filter(x => x !== id)
            const isAlreadySelected = prev[status].includes(id)
            if (!isAlreadySelected) {
                if (status === 'going') going.push(id)
                if (status === 'maybe') maybe.push(id)
                if (status === 'cant')  cant.push(id)
            }
            return { ...prev, going, maybe, cant }
        })
    }

    return(
        <div className="flex flex-col max-w-[1200px] mx-auto min-h-screen p-4 sm:p-6 lg:p-10">

            {/* Header */}
            <div className="flex flex-col gap-1 p-4 sm:p-5 w-full">
                <span className="[font-family:var(--mono)] text-[var(--text-3)] text-[11px]">
                    THIS {upcomingEventWeekdate} · {dateTodayFormatted}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center w-full gap-3 sm:gap-5">
                    <span className="[font-family:var(--heading)] font-medium text-2xl md:text-[34px] lg:text-[40px] leading-tight">
                        Game night at {event.venue}
                    </span>

                    <div className="sm:ml-auto flex overflow-hidden rounded-lg border border-[var(--border)] shadow-sm self-start shrink-0">
                        <button type="button" onClick={() => handleRsvp('going')} className={`px-3 sm:px-4 py-2 sm:py-2.5 text-center text-sm font-medium transition-colors cursor-pointer ${userStatus === 'going' ? 'bg-[var(--in-text)] text-white' : 'bg-white text-[var(--text-2)] hover:text-[var(--in-text)]'}`}>I'm in</button>
                        <button type="button" onClick={() => handleRsvp('maybe')} className={`px-3 sm:px-4 py-2 sm:py-2.5 text-center text-sm font-medium border-x border-[var(--border)] transition-colors cursor-pointer ${userStatus === 'maybe' ? 'bg-[var(--maybe-text)] text-white' : 'bg-white text-[var(--text-2)] hover:text-[var(--maybe-text)]'}`}>Maybe</button>
                        <button type="button" onClick={() => handleRsvp('cant')}  className={`px-3 sm:px-4 py-2 sm:py-2.5 text-center text-sm font-medium transition-colors cursor-pointer ${userStatus === 'cant'  ? 'bg-[var(--out-text)] text-white' : 'bg-white text-[var(--text-2)] hover:text-[var(--out-text)]'}`}>Can't</button>
                    </div>
                </div>
            </div>

            
            {/* Body */}
            <div className="flex flex-col lg:flex-row items-start gap-5 p-4 sm:p-5 w-full">

                <div className="flex-1 flex flex-col min-w-0 w-full">

                    {/* Upcoming event */}
                    <UpcomingEventCard event={event} formattedDate={upcomingEventDate} />


                    {/* Voting */}
                    <VotingCard totalVotes={totalVotes}/>
                </div>

                {/* Who's coming */}
                <AttendanceCard event={event}/>
            </div>
        </div>
    )
}
