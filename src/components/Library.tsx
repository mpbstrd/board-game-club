import { getUniqueGamesCount } from '../services/sessionService'
import { useState } from 'react'
import { games } from '../data/gamesData'
import { Search, Dices, StarIcon, SkullIcon } from 'lucide-react'
import { categories } from '../data/categoryData'

const totalGames = getUniqueGamesCount()

type GameCardProps = {
    id: number
    name: string
    imgUrl?: string
    gameCategories?: number[]
    weight?: number
    rating?: number
    description?: string
}

function GameCard({id, name, imgUrl, description, weight, rating, gameCategories} : GameCardProps){
    return (
        <div key={id} className='flex-1 bg-[var(--surface)] min-w-[335px] h-[362px] border border-[var(--border)] rounded-[16px]'>
            <div className='h-[160px]'>
                {imgUrl
                    ? <img src={imgUrl} alt={name} className='h-full w-full object-cover object-top border border-[var(--border)] rounded-[16px]' />
                    : <div
                        className='h-full w-full flex flex-col items-center justify-center gap-2 border border-[var(--border)] rounded-[16px]'
                        style={{
                            backgroundColor: 'var(--surface-2)',
                            backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
                            backgroundSize: '16px 16px',
                        }}
                    >
                        <Dices size={38} strokeWidth={1.5} className='text-[var(--accent)]' />
                        <span className='[font-family:var(--mono)] text-[var(--text-3)] text-[10px] uppercase tracking-widest'>No cover art</span>
                    </div>
                }
                
            </div>
            <div className='flex flex-col pt-4 px-4 gap-1'>
                <div className='flex flex-row flex-start justify-between'>
                    <span className='[font-family:var(--heading)] t-[19px]'>{name}</span>
                    <div className='flex flex-row flex-start gap-2 items-center text-center'>
                        <div className='flex flex-row gap-1'>
                            <StarIcon size={16} strokeWidth={3} color='var(--accent)' />
                            <span>{rating !== null ? rating : "0.00"}</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex-1'>
                        {gameCategories?.map((category) => {
                            const cat = categories.find(c => c.id === category)
                            if (!cat) return null
                            return (
                                <div className='bg-[var(--cat-strategy)]/25 inline-flex gap-1 py-1 px-2 mx-1 border border-[var(--cat-strategy)] rounded-[20px]'>
                                    <span className='text-[11px] text-[var(--cat-strategy)] '>
                                        {cat.name}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <SkullIcon size={16} strokeWidth={3} color='var(--accent)' />
                        <span>{weight !== null ? weight : "0.00"}</span>
                    </div>
                </div>
                <div>{description?.split(/(?<=[.])\s/)[0]}</div>
            </div>
            
        </div>
    )
}

export default function Library() {
    const [query, setQuery] = useState("")
    const filteredGames = games.filter((item) => 
        item.name.toLowerCase().includes(query.toLowerCase())
    )

    return(
        <div className="flex flex-col max-w-[1200px] min-h-screen p-4 sm:p-6 lg:p-10 mx-auto">

            <div className="flex flex-col gap-1 p-4 sm:p-5 w-full">
                <div className="[font-family:var(--mono)] text-[var(--text-3)] text-[11px] uppercase">
                    {totalGames} games on the shelf
                </div>
                <div className="flex flex-col justify-between sm:flex-row sm:items-center w-full gap-3 sm:gap-5">
                    <span className="[font-family:var(--heading)] font-medium text-2xl md:text-[34px] lg:text-[40px] leading-tight">The Library</span>
                    <div className='flex flex-row gap-3 flex-start align-center vertical-align px-[14px] py-[10px] bg-[var(--surface)] border border-[var(--border)] rounded-[12px]'>
                        <Search height={18} />
                        <input 
                            type="text" 
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)} 
                            placeholder='Search games...'
                            className='text-[16px]'></input>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div>

            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                filteredGames.map((game) => {
                    return (
                        <GameCard 
                            id={game.id} 
                            name={game.name}
                            imgUrl={game.imgUrl}
                            weight={game.weight}
                            rating={game.rating}
                            description={game.description}
                            gameCategories={game.categories}
                        />
                    )
                })
            }
            </div>
            
        </div>
    )
}