import { getTopVenues } from "../../services/sessionService"
import { type TopProperty } from "../../types"

const topVenues: TopProperty[] = getTopVenues(5) 

export function TopVenuesCard() {
    return (
        <div>
            {topVenues.map((venue) => (
                <div key={venue.rank}>
                    {venue.rank}. {venue.name} — {venue.count} sessions
                </div>
            ))}
        </div>
    )
}