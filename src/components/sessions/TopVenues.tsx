import { getTopVenues } from "../../services/sessionService"
import { type TopProperty } from "../../types"

const topVenues: TopProperty[] = getTopVenues(7)

export function TopVenuesCard() {
    return (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
            <h2 className="[font-family:var(--heading)] text-xl mb-2">Top venues</h2>
            <div className="divide-y divide-[var(--border-soft)]">
                {topVenues.map((venue) => (
                    <div key={venue.rank} className="flex items-center gap-3 py-3">
                        <span className="[font-family:var(--mono)] text-[11px] text-[var(--text-3)] w-4 shrink-0">
                            {venue.rank}
                        </span>
                        <span className="flex-1 text-sm text-[var(--text-2)]">{venue.name}</span>
                        <span className="[font-family:var(--mono)] text-[12px] text-[var(--accent)] shrink-0">
                            {venue.count} {venue.count === 1 ? 'night' : 'nights'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
