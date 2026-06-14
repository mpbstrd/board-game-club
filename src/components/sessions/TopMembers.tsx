import { getMembersAttendanceRanking } from "../../services/sessionService"
import { type TopMembers } from "../../types"

const topMembers: TopMembers[] = getMembersAttendanceRanking()

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