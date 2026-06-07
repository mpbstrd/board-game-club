import { getTopVenues, getTotalSessions } from "../services/sessionService"
import { type TopVenues, type MonthlySessionCount } from '../types'

const totalSessions = getTotalSessions()
const topVenues: TopVenues[] = getTopVenues(5) 

export default function Sessions() {
    return(
        <div>
            Sessions

            {topVenues.map((venue) => (
                <div key={venue.rank}>
                    {venue.rank}. {venue.name} — {venue.count} sessions
                </div>
            ))}
        </div>
    )
}