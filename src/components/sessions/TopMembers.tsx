import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, LabelList, Cell } from 'recharts'
import { getMembersAttendanceRanking } from "../../services/sessionService"
import { members } from "../../data/memberData"

const topMembers = getMembersAttendanceRanking()

// Hardcoded from CSS vars in index.css
const MEMBER_COLOR_HEX: Record<number, string> = {
    1: '#52b3d9', // --m-perry
    2: '#611792', // --m-dk
    3: '#7c8bd0', // --m-watson
    4: '#5fa98c', // --m-tres
    5: '#cf6f97', // --m-joyce
    6: '#6fae72', // --m-ian
    7: '#c9a84e', // --m-kim
    8: '#ac1a1a', // --m-kyle
}

function hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function getInitials(name: string): string {
    const parts = name.trim().split(/\s+/)
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
    return name.slice(0, 2).toUpperCase()
}

function MemberTick({ x, y, payload }: any) {
    const member = members.find(m => m.name === payload.value)
    const color = MEMBER_COLOR_HEX[member?.id ?? 0] ?? '#888888'
    const initials = getInitials(payload.value)
    const r = 10

    return (
        <g transform={`translate(${x},${y})`}>
            <circle cx={-r - 5} cy={0} r={r} fill={hexToRgba(color, 0.2)} />
            <text
                x={-r - 5}
                y={0}
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fill: color, fontSize: 8, fontFamily: "'Space Mono', monospace", fontWeight: 'bold' }}
            >
                {initials}
            </text>
            <text
                x={-r - 5 - r - 6}
                y={0}
                textAnchor="end"
                dominantBaseline="central"
                style={{ fill: '#565d69', fontSize: 13 }}
            >
                {payload.value}
            </text>
        </g>
    )
}

export function TopMembersCard() {
    return (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
            <h2 className="[font-family:var(--heading)] text-xl mb-4">Attendance</h2>
            <ResponsiveContainer width="100%" height={topMembers.length * 36 + 10}>
                <BarChart data={topMembers} layout="vertical" margin={{ top: 0, right: 38, left: 0, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis
                        type="category"
                        dataKey="name"
                        width={120}
                        axisLine={false}
                        tickLine={false}
                        tick={<MemberTick />}
                        interval={0}
                    />
                    <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={14}>
                        {topMembers.map((item) => {
                            const member = members.find(m => m.name === item.name)
                            const color = MEMBER_COLOR_HEX[member?.id ?? 0] ?? '#888888'
                            return <Cell key={item.rank} fill={color} />
                        })}
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
