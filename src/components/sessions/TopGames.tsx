import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, LabelList, Cell } from 'recharts'
import { getMostPlayedGames } from "../../services/sessionService"

const topGames = getMostPlayedGames(8)

// Hardcoded from existing CSS vars: --m-tres, --m-watson, --cat-coop, --m-kyle, --m-ian, --cat-abstract, --m-kim, --m-joyce
const PALETTE = ['#5fa98c', '#7c8bd0', '#5f97c0', '#ac1a1a', '#6fae72', '#c074b8', '#c9a84e', '#cf6f97']

function GameTick({ x, y, payload }: any) {
    const name: string = payload.value
    const display = name.length > 17 ? name.slice(0, 15) + '…' : name
    return (
        <text x={x} y={y} textAnchor="end" dominantBaseline="central" style={{ fill: '#565d69', fontSize: 12 }}>
            {display}
        </text>
    )
}

export function TopGamesCard() {
    return (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
            <h2 className="[font-family:var(--heading)] text-xl mb-4">Most played games</h2>
            <ResponsiveContainer width="100%" height={topGames.length * 36 + 10}>
                <BarChart data={topGames} layout="vertical" margin={{ top: 0, right: 38, left: 0, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis
                        type="category"
                        dataKey="name"
                        width={140}
                        axisLine={false}
                        tickLine={false}
                        tick={<GameTick />}
                        interval={0}
                    />
                    <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={14}>
                        {topGames.map((_, i) => (
                            <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                        ))}
                        <LabelList
                            dataKey="count"
                            position="right"
                            style={{ fill: '#7d838d', fontSize: 11, fontFamily: "'Space Mono', monospace" }}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
