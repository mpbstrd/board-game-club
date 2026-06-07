import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { ScheduleIcon, VenueIcon, PlayerCountIcon } from '../assets/icons'

type RSVPStatus = 'going' | 'maybe' | 'cant'

export default function Dashboard() {
    const { currentUser, upcomingEvent, members } = useAppContext()
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
        <div className="flex flex-col w-full min-h-screen p-4 sm:p-6 lg:p-10">

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

                    {/* Upcoming event card */}
                    <div className="relative flex flex-col p-5 sm:p-7 mb-5 bg-[var(--surface)] border border-[var(--border)] rounded-[18px] overflow-hidden min-h-[150px] sm:min-h-[170px]">
                        <img
                            src={event.mainGameImageUrl}
                            alt={event.mainGame}
                            className="sm:block absolute right-0 top-0 h-auto sm:h-full w-full sm:w-auto cover opacity-20 sm:opacity-70"
                        />
                        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-y-2 relative z-10">
                            <div className="flex items-center">
                                <ScheduleIcon size={18} className="text-[var(--accent)] shrink-0" />
                                <span className="ml-2 text-[var(--text-1)] text-sm sm:text-base sm:mr-4">{upcomingEventDate} · {event.time}</span>
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

                    {/* Voting */}
                    <div className="flex flex-col p-5 sm:p-7 bg-[var(--surface)] border border-[var(--border)] rounded-[18px] min-h-[200px] lg:min-h-[500px]">
                        <div className="flex flex-row justify-between">
                           <span className="[font-family:var(--mono)] text-[var(--text-3)] text-[12px] sm:text-[16px]">LIVE VOTE</span>
                           <span className="[font-family:var(--mono)] text-[var(--text-3)] text-[12px] sm:text-[16px]">{totalVotes} votes</span>
                        </div>
                        <div>
                           <span className="[font-family:var(--heading)] font-medium text-[var(--text-1)] text-[20px] sm:text-[24px]">Where are we playing?</span>
                        </div>
                        <div className='flex flex-1 items-center justify-center'>
                            <span className='[font-family:var(--mono)] text-[var(--text-2)] text-[60px]'>WORK IN PROGRESS</span>
                        </div>
                    </div>
                </div>

                {/* Who's coming */}
                <div className="flex flex-col w-full lg:w-[320px] lg:shrink-0 p-5 sm:p-7 bg-[var(--surface)] border border-[var(--border)] rounded-[18px] min-h-[200px] lg:min-h-[560px]">
                    <div>
                        <span className="[font-family:var(--heading)] font-medium text-[var(--text-1)] text-[20px] sm:text-[21px]">Who's coming?</span>
                    </div>
                    <div>
                        <span className='[font-family:var(--mono)] text-[var(--in-text)] text-[11px]'>IN · {event.going.length}</span>
                        {event.going.map((id) => {
                            const member = members.find(m => m.id === id)
                            if (!member) return null
                            return (
                                <div key={id} className="flex items-center gap-3 pt-3">
                                    <div className="w-10 h-10 shrink-0">
                                        <img className="w-full h-full rounded-full object-cover object-center ring-1 ring-white" src={member.avatarUrl} alt={member.name} />
                                    </div>
                                    <div className='flex flex-row items-center'>
                                        <div className="text-sm font-medium text-[var(--text-1)]">{member.name}</div>
                                        {member.id === currentUser.id ? <span className='[font-family:var(--mono)] bg-[var(--accent)]/16 px-[6px] rounded-[12px] text-[var(--accent)] text-[11px] ml-3'>YOU</span> : null}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='mt-3'>
                        <span className='[font-family:var(--mono)] text-[var(--maybe-text)] text-[11px]'>MAYBE · {event.maybe.length}</span>
                        {event.maybe.map((id) => {
                            const member = members.find(m => m.id === id)
                            if (!member) return null
                            return (
                                <div key={id} className="flex items-center gap-3 pt-3">
                                    <div className="w-10 h-10 shrink-0">
                                        <img className="w-full h-full rounded-full object-cover object-center ring-1 ring-white" src={member.avatarUrl} alt={member.name} />
                                    </div>
                                    <div className='flex flex-row items-center'>
                                        <div className="text-sm font-medium text-[var(--text-1)]">{member.name}</div>
                                        {member.id === currentUser.id ? <span className='[font-family:var(--mono)] bg-[var(--accent)]/16 px-[6px] rounded-[12px] text-[var(--accent)] text-[11px] ml-3'>YOU</span> : null}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='mt-3'>
                        <span className='[font-family:var(--mono)] text-[var(--out-text)] text-[11px]'>OUT · {event.cant.length}</span>
                        {event.cant.map((id) => {
                            const member = members.find(m => m.id === id)
                            if (!member) return null
                            return (
                                <div key={id} className="flex items-center gap-3 pt-3">
                                    <div className="w-10 h-10 shrink-0">
                                        <img className="w-full h-full rounded-full object-cover object-center ring-1 ring-white" src={member.avatarUrl} alt={member.name} />
                                    </div>
                                    <div className='flex flex-row items-center'>
                                        <div className="text-sm font-medium text-[var(--text-1)]">{member.name}</div>
                                        {member.id === currentUser.id ? <span className='[font-family:var(--mono)] bg-[var(--accent)]/16 px-[6px] rounded-[12px] text-[var(--accent)] text-[11px] ml-3'>YOU</span> : null}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
