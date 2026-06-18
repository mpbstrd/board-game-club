import { ResponsiveContainer, BarChart, Bar, XAxis, LabelList } from 'recharts'
import { getSessionsPerMonth } from "../../services/sessionService"

const data = getSessionsPerMonth()

// Hardcoded from --accent: #E8A33D
const ACCENT = '#E8A33D'

export function SessionsPerMonthCard() {
    return (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
            <h2 className="[font-family:var(--heading)] text-xl mb-4">Nights per month</h2>
            <ResponsiveContainer width="100%" height={210}>
                <BarChart data={data} margin={{ top: 22, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={ACCENT} stopOpacity={1} />
                            <stop offset="100%" stopColor={ACCENT} stopOpacity={0.4} />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(val: string) => val.split(' ')[0].slice(0, 3)}
                        tick={{ fill: '#7d838d', fontSize: 10, fontFamily: "'Space Mono', monospace" }}
                    />
                    <Bar dataKey="count" fill="url(#barGrad)" radius={[6, 6, 0, 0]}>
                        <LabelList
                            dataKey="count"
                            position="top"
                            style={{ fill: '#7d838d', fontSize: 10, fontFamily: "'Space Mono', monospace" }}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
