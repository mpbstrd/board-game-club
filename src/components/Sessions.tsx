import { getFirstAndLatestSession, getMembersAttendanceRanking, getMostPlayedGames, getSessionsPerMonth, getTopVenues, getTotalSessions, getUniqueGamesCount } from "../services/sessionService"
import { type TopVenues, type TopGames, type MonthlySessionCount, type TopMembers } from '../types'

const firstAndLastSession: [Date, Date] = getFirstAndLatestSession()
const firstSession: string = firstAndLastSession[0].toLocaleString('en-US', {month: 'short', year: 'numeric'})
const lastSession: string = firstAndLastSession[1].toLocaleString('en-US', {month: 'short', year: 'numeric'})

const totalSessions = getTotalSessions()
const topVenues: TopVenues[] = getTopVenues(5) 
const topGames: TopGames[] = getMostPlayedGames(5)
const monthlySessionCount: MonthlySessionCount[] = getSessionsPerMonth()
const topMembers: TopMembers[] = getMembersAttendanceRanking()
const maxGames: number = getUniqueGamesCount()



export default function Sessions() {
    return(
        <div className="flex flex-col w-[1200px] min-h-screen p-4 sm:p-6 lg:p-10 mx-auto">

            <div className="flex flex-col gap-1 p-4 sm:p-5 w-full">
                <div className="[font-family:var(--mono)] text-[var(--text-3)] text-[11px] uppercase">
                    {firstSession} - {lastSession}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center w-full gap-3 sm:gap-5">
                    <span className="[font-family:var(--heading)] font-medium text-2xl md:text-[34px] lg:text-[40px] leading-tight">Sessions Played</span>
                </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-start gap-5 p-4 sm:p-5 w-full">
                <div className="flex-1 flex flex-row min-w-0 w-full justify-between">
                    <div className="flex flex-col bg-[var(--surface)] p-[14px] w-[250px] h-[110px] border border-[var(--border)] rounded-[16px]">
                        <span className="[font-family:var(--heading)] text-2xl md:text-[34px] lg:text-[40px]">
                            {totalSessions}
                            </span>
                        <span className="[font-family:var(--mono)] font-normal text-[var(--text-3)] text-[11px] lh-[1.4] leading-[1.4] uppercase">
                            Friday Nights
                        </span>
                    </div>
                    <div className="flex flex-col bg-[var(--surface)] p-[14px] w-[250px] h-[110px] border border-[var(--border)] rounded-[16px]">
                        <span className="[font-family:var(--heading)] text-2xl md:text-[34px] lg:text-[40px]">
                            180
                            </span>
                        <span className="[font-family:var(--mono)] font-normal text-[var(--text-3)] text-[11px] lh-[1.4] leading-[1.4] uppercase">
                            Games Played
                        </span>
                    </div>
                    <div className="flex flex-col bg-[var(--surface)] p-[14px] w-[250px] h-[110px] border border-[var(--border)] rounded-[16px]">
                        <span className="[font-family:var(--heading)] text-2xl md:text-[34px] lg:text-[40px]">
                            {maxGames}
                            </span>
                        <span className="[font-family:var(--mono)] font-normal text-[var(--text-3)] text-[11px] lh-[1.4] leading-[1.4] uppercase">
                            Unique Titles
                        </span>
                    </div>
                    <div className="flex flex-col bg-[var(--surface)] p-[14px] w-[250px] h-[110px] border border-[var(--border)] rounded-[16px]">
                        <span className="[font-family:var(--heading)] text-2xl md:text-[34px] lg:text-[40px]">
                            15
                            </span>
                        <span className="[font-family:var(--mono)] font-normal text-[var(--text-3)] text-[11px] lh-[1.4] leading-[1.4] uppercase">
                            Most in a day · MAY 30, 2026
                        </span>
                    </div>
                </div>
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