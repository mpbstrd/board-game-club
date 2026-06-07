import { getMembersAttendanceRanking, getMostPlayedGames, getSessionsPerMonth, getTopVenues, getTotalSessions } from "../services/sessionService"
import { type TopVenues, type TopGames, type MonthlySessionCount, type TopMembers } from '../types'

const totalSessions = getTotalSessions()
const topVenues: TopVenues[] = getTopVenues(5) 
const topGames: TopGames[] = getMostPlayedGames(5)
const monthlySessionCount: MonthlySessionCount[] = getSessionsPerMonth()
const topMembers: TopMembers[] = getMembersAttendanceRanking()

export default function Sessions() {
    return(
        <div>
            Sessions

            <br></br>
            <div>
                Total Sessions: {totalSessions}
            </div>
            <br></br>
            <div>
            {monthlySessionCount.map((item) => (
                <div key={item.month}>
                    {item.month} — {item.count}
                </div>
            ))}
            </div>
            <br></br>
            {topVenues.map((venue) => (
                <div key={venue.rank}>
                    {venue.rank}. {venue.name} — {venue.count} sessions
                </div>
            ))}
            <br></br>
            {topGames.map((game) => (
                <div key={game.rank}>
                    {game.rank}. {game.name} — {game.count} sessions
                </div>
            ))}
            <br></br>
            {topMembers.map((member) => (
                <div key={member.rank}>
                    {member.rank}. {member.name} — {member.count} sessions
                </div>
            ))}
        </div>
    )
}