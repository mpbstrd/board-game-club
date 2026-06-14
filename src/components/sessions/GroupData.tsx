import { getTotalSessions, getUniqueGamesCount } from '../../services/sessionService'

const totalSessions = getTotalSessions()
const maxGames: number = getUniqueGamesCount()

export function GroupDataCard() {
    return (
        <div className="flex flex-col lg:flex-row items-start gap-5 p-4 sm:p-5 w-full">
                <div className="flex-1 flex flex-row min-w-0 w-full justify-between">
                    <div className="flex flex-col bg-[var(--surface)] p-[14px] w-[250px] h-[110px] border border-[var(--border)] rounded-[16px]">
                        <span className="[font-family:var(--heading)] text-2xl md:text-[34px] lg:text-[40px]">
                            {totalSessions}
                            </span>
                        <span className="[font-family:var(--mono)] font-normal text-[var(--text-3)] text-[11px] lh-[1.4] leading-[1.4] uppercase">
                            Friday Nights
                        </span>
                    </div>
                    <div className="flex flex-col bg-[var(--surface)] p-[14px] w-[250px] h-[110px] border border-[var(--border)] rounded-[16px]">
                        <span className="[font-family:var(--heading)] text-2xl md:text-[34px] lg:text-[40px]">
                            180
                            </span>
                        <span className="[font-family:var(--mono)] font-normal text-[var(--text-3)] text-[11px] lh-[1.4] leading-[1.4] uppercase">
                            Games Played
                        </span>
                    </div>
                    <div className="flex flex-col bg-[var(--surface)] p-[14px] w-[250px] h-[110px] border border-[var(--border)] rounded-[16px]">
                        <span className="[font-family:var(--heading)] text-2xl md:text-[34px] lg:text-[40px]">
                            {maxGames}
                            </span>
                        <span className="[font-family:var(--mono)] font-normal text-[var(--text-3)] text-[11px] lh-[1.4] leading-[1.4] uppercase">
                            Unique Titles
                        </span>
                    </div>
                    <div className="flex flex-col bg-[var(--surface)] p-[14px] w-[250px] h-[110px] border border-[var(--border)] rounded-[16px]">
                        <span className="[font-family:var(--heading)] text-2xl md:text-[34px] lg:text-[40px]">
                            15
                            </span>
                        <span className="[font-family:var(--mono)] font-normal text-[var(--text-3)] text-[11px] lh-[1.4] leading-[1.4] uppercase">
                            Most in a day · MAY 30, 2026
                        </span>
                    </div>
                </div>
            </div>
    )
}