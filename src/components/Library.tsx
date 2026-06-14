import { getUniqueGamesCount } from '../services/sessionService'
import { useState } from 'react'
import { games } from '../data/gamesData'

const totalGames = getUniqueGamesCount()



export default function Library() {
    const [query, setQuery] = useState("")
    const filteredGames = games.filter((item) => 
    item.name.toLowerCase().includes(query.toLowerCase())
)

    return(
        <div className="flex flex-col w-[1200px] min-h-screen p-4 sm:p-6 lg:p-10 mx-auto">

            <div className="flex flex-col gap-1 p-4 sm:p-5 w-full">
                <div className="[font-family:var(--mono)] text-[var(--text-3)] text-[11px] uppercase">
                    {totalGames} games on the shelf
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center w-full gap-3 sm:gap-5">
                    <span className="[font-family:var(--heading)] font-medium text-2xl md:text-[34px] lg:text-[40px] leading-tight">The Library</span>
                    <div>
                        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search games...'></input>
                    </div>
                </div>
            </div>

            {
                filteredGames.map((game) => {
                    return (
                        <div>
                            {game.id} - {game.name}
                        </div>
                    )
                }
            )
            }
        </div>
    )
}