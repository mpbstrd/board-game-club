import { getMostPlayedGames } from "../../services/sessionService"
import { type TopGames } from "../../types"

const topGames: TopGames[] = getMostPlayedGames(5)



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