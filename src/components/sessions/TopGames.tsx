import { getMostPlayedGames } from "../../services/sessionService"
import { type TopProperty } from "../../types"

const topGames: TopProperty[] = getMostPlayedGames(5)



export function TopGamesCard() {
    return (
        <div>
            {topGames.map((game) => (
                <div key={game.rank}>
                    {game.rank}. {game.name} — {game.count} sessions
                </div>
            ))}
        </div>
    )
}