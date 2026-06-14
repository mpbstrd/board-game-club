import { getFirstAndLatestSession } from "../services/sessionService"
import { GroupDataCard } from './sessions/GroupData'
import { SessionsPerMonthCard } from './sessions/SessionsPerMonth'
import { SessionHistoryCard } from './sessions/SessionHistory'
import { TopMembersCard } from "./sessions/TopMembers"
import { TopGamesCard } from "./sessions/TopGames"
import { TopVenuesCard } from "./sessions/TopVenues"

const firstAndLastSession: [Date, Date] = getFirstAndLatestSession()
const firstSession: string = firstAndLastSession[0].toLocaleString('en-US', {month: 'short', year: 'numeric'})
const lastSession: string = firstAndLastSession[1].toLocaleString('en-US', {month: 'short', year: 'numeric'})

export default function Sessions() {
    return(
        <div className="flex flex-col max-w-[1200px] min-h-screen p-4 sm:p-6 lg:p-10 mx-auto">

            <div className="flex flex-col gap-1 p-4 sm:p-5 w-full">
                <div className="[font-family:var(--mono)] text-[var(--text-3)] text-[11px] uppercase">
                    {firstSession} - {lastSession}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center w-full gap-3 sm:gap-5">
                    <span className="[font-family:var(--heading)] font-medium text-2xl md:text-[34px] lg:text-[40px] leading-tight">Sessions Played</span>
                </div>
            </div>
            
            <GroupDataCard />
            <br></br>

            <SessionsPerMonthCard />
            <br></br>
            
            <TopVenuesCard />
            <br></br>

            <TopGamesCard />
            <br></br>
            
            <TopMembersCard />
            <br></br>
            
            <SessionHistoryCard />
        </div>
    )
}