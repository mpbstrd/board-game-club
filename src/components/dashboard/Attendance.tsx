import { useAppContext } from "../../context/AppContext"
import { type UpcomingEvent, type Member } from "../../types"

type Props = {
    event: UpcomingEvent
}

type SectionProps = {
    label: string
    color: string
    ids: number[]
    members: Member[]
    currentUserId: number
}

function AttendanceSection({ label, color, ids, members, currentUserId }: SectionProps) {
    return (
        <div className="mt-3">
            <span className="[font-family:var(--mono)] text-[11px]" style={{ color }}>
                {label} · {ids.length}
            </span>
            {ids.length === 0 && (
                <p className="[font-family:var(--mono)] text-[var(--text-3)] text-[11px] mt-2">No one yet</p>
            )}
            {ids.map((id) => {
                const member = members.find(m => m.id === id)
                if (!member) return null
                return (
                    <div key={id} className="flex items-center gap-3 pt-3">
                        <div className="w-10 h-10 shrink-0">
                            <img className="w-full h-full rounded-full object-cover object-center ring-1 ring-white" src={member.avatarUrl} alt={member.name} />
                        </div>
                        <div className="flex flex-row items-center">
                            <span className="text-sm font-medium text-[var(--text-1)]">{member.name}</span>
                            {member.id === currentUserId && (
                                <span className="[font-family:var(--mono)] bg-[var(--accent)]/16 px-[6px] rounded-[12px] text-[var(--accent)] text-[11px] ml-3">YOU</span>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export function AttendanceCard({ event }: Props) {
    const { members, currentUser } = useAppContext()

    const sections = [
        { label: 'IN',    ids: event.going, color: 'var(--in-text)'    },
        { label: 'MAYBE', ids: event.maybe, color: 'var(--maybe-text)' },
        { label: 'OUT',   ids: event.cant,  color: 'var(--out-text)'   },
    ]

    return (
        <div className="flex flex-col w-full lg:w-[320px] lg:shrink-0 p-5 sm:p-7 bg-[var(--surface)] border border-[var(--border)] rounded-[18px] min-h-[200px] lg:min-h-[560px]">
            <span className="[font-family:var(--heading)] font-medium text-[var(--text-1)] text-[20px] sm:text-[21px]">Who's coming?</span>
            {sections.map(({ label, ids, color }) => (
                <AttendanceSection
                    key={label}
                    label={label}
                    color={color}
                    ids={ids}
                    members={members}
                    currentUserId={currentUser.id}
                />
            ))}
        </div>
    )
}