import { getSessionsPerMonth } from "../../services/sessionService"
import { type MonthlySessionCount } from "../../types"

const monthlySessionCount: MonthlySessionCount[] = getSessionsPerMonth()


export function SessionsPerMonthCard() {
    return (
        <div>
            {monthlySessionCount.map((item) => (
                <div key={item.month}>
                    {item.month} — {item.count}
                </div>
            ))}
        </div>
    )
}