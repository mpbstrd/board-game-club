import { HomeIcon, LibraryIcon, CollectionIcon, LeaderboardIcon, SessionsIcon, ScheduleIcon, BrandMarkIcon } from '../assets/icons'
import { Link } from 'react-router-dom'

type NavItem = {
    to: string,
    icon: React.ComponentType<{ className?: string }>,
    label: string
}

const navItems: NavItem[] = [
    { to: '/', icon: HomeIcon, label: 'Home' },
    { to: '/library', icon: LibraryIcon, label: 'Library' },
    { to: '/collection', icon: CollectionIcon, label: 'Collection' },
    { to: '/leaderboard', icon: LeaderboardIcon, label: 'Leaderboard' },
    { to: '/sessions', icon: SessionsIcon, label: 'Sessions' },
    { to: '/schedule', icon: ScheduleIcon, label: 'Schedule' },
]

type UpcomingEvent = {
    weekday: string,
    time: string
}

const upcomingEvent: UpcomingEvent = {
    weekday: 'Friday',
    time: '7:30 PM'
}

type CurrentUser = {
    name: string,
    sessionsPlayed: number,
    playedGames: number
}

const currentUser: CurrentUser = {
    name: 'Perry',
    sessionsPlayed: 42,
    playedGames: 32
}

export function Navigation() {
    return (
        <nav className="flex flex-col items-stretch w-[252px] h-screen p-4 sticky top-0 bg-[var(--bg-2)] border-r border-[var(--border-soft)]">

            {/* Brand */}
            <div className="flex items-center gap-3 pt-5 pr-[30px] pb-[14px] pl-[10px]">
                <div className="w-10 h-10 rounded-[10px] bg-[var(--accent)] flex items-center justify-center shrink-0">
                    <BrandMarkIcon size={22} />
                </div>
                <div className="flex flex-col gap-0.5">
                    <span className="[font-family:var(--heading)] text-[22px] font-medium text-[var(--text-1)] leading-none">Friday</span>
                    <span className="[font-family:var(--mono)] text-[10px] tracking-[0.12em] uppercase text-[var(--text-3)] leading-none">Board Games Club</span>
                </div>
            </div>

            {/* Nav items */}
            <ul className="list-none p-0 m-0">
                {navItems.map((item) => (
                    <li key={item.to}>
                        <Link to={item.to} className="[font-family:var(--sans)] flex items-center w-full h-11 m-2 no-underline text-[var(--text-3)] px-0.5">
                            <item.icon className="w-5 h-5 mr-3 shrink-0 text-[var(--text-3)]" />
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Upcoming */}
            <div className="mt-auto border border-[var(--border)] rounded-[13px] bg-[var(--surface)] flex flex-col gap-0.5 px-2 py-1">
                <span className="[font-family:var(--mono)] text-[11px] font-medium text-[var(--text-3)] leading-none p-3">NEXT UP</span>
                <span className="[font-family:var(--heading)] text-base text-[var(--text-1)] leading-none px-3 pb-3">This {upcomingEvent.weekday} · {upcomingEvent.time}</span>
            </div>

            {/* User */}
            <div className="flex items-center gap-3 pt-3">
                <div className="w-10 h-10 shrink-0">
                    <img className="w-full h-full rounded-full object-cover object-center ring ring-white" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div>
                    <div className="[font-family:var(--sans)] text-sm font-medium text-[var(--text-1)]">{currentUser.name}</div>
                    <div className="text-xs text-[var(--text-3)]">{currentUser.sessionsPlayed} sessions · {currentUser.playedGames} games</div>
                </div>
            </div>

        </nav>
    )
}
