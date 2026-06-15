import { getMembersAttendanceRanking } from "../../services/sessionService"
import { type TopProperty } from "../../types"

const topMembers: TopProperty[] = getMembersAttendanceRanking()

export function TopMembersCard(){
    return (
        <div>
            {topMembers.map((member) => (
                <div key={member.rank}>
                    {member.rank}. {member.name} — {member.count} sessions
                </div>
            ))}
        </div>
    )
}