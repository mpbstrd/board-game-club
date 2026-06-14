import { useAppContext } from "../../context/AppContext"
import { type UpcomingEvent } from "../../types"

type Props = {
    event: UpcomingEvent
}

export function AttendanceCard({event} : Props){
    const {members, currentUser} = useAppContext()
    return (
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
    )
}