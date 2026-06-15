import { HomeIcon, LibraryIcon, CollectionIcon, LeaderboardIcon, SessionsIcon, ScheduleIcon, BrandMarkIcon } from '../assets/icons'
import { Link, NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { Wrench, X } from 'lucide-react'

type NavItem = {
    to: string,
    icon: React.FC<{ className?: string }>,
    label: string
}

const navItems: NavItem[] = [
    { to: '/dashboard', icon: HomeIcon, label: 'Home' },
    { to: '/library', icon: LibraryIcon, label: 'Library' },
    { to: '/collection', icon: CollectionIcon, label: 'Collection' },
    { to: '/leaderboard', icon: LeaderboardIcon, label: 'Leaderboard' },
    { to: '/sessions', icon: SessionsIcon, label: 'Sessions' },
    { to: '/schedule', icon: ScheduleIcon, label: 'Schedule' },
    { to: '/tools', icon: Wrench, label: 'Tools' },
]

type NavigationProps = {
    isOpen: boolean
    onClose: () => void
}

export function Navigation({ isOpen, onClose }: NavigationProps) {
    const { currentMember, upcomingEvent } = useAppContext()

    
    return (
        <nav className={`
            flex flex-col items-stretch w-[252px] shrink-0 h-screen p-4 overflow-y-auto
            fixed top-0 left-0 z-50
            lg:fixed
            bg-[var(--bg-2)] border-r border-[var(--border-soft)]
            transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>

            {/* Close button — mobile only */}
            <button
                className="lg:hidden self-end p-2 mb-1 rounded-lg text-[var(--text-3)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] transition-colors"
                onClick={onClose}
                aria-label="Close menu"
            >
                <X size={20} />
            </button>

            {/* Brand */}
            <Link to="/">
            <div className="flex items-center gap-3 pt-3 lg:pt-5 pr-[30px] pb-[14px] pl-[10px]">
                <div className="w-10 h-10 rounded-[10px] bg-[var(--accent)] flex items-center justify-center shrink-0">
                    <BrandMarkIcon size={22} />
                </div>
                <div className="flex flex-col gap-0.5">
                    <span className="[font-family:var(--heading)] text-[22px] font-medium text-[var(--text-1)] leading-none">Friday</span>
                    <span className="[font-family:var(--mono)] text-[10px] tracking-[0.12em] uppercase text-[var(--text-3)] leading-none">Board Games Club</span>
                </div>
            </div>
            </Link>

            {/* Nav items */}
            <ul className="list-none p-0 mx-2">
                {navItems.map((item) => {
                    if (item.to === '/tools' && currentMember.isAdmin !== true) return null
                    return (
                        <li key={item.to} className="mb-1 last:mb-0">
                            <NavLink to={item.to} onClick={onClose}>
                                {({ isActive }) => (
                                    <span className={`flex items-center w-full h-11 no-underline px-0.5 rounded-lg transition-colors ${isActive ? 'bg-[var(--streak)]/16 text-[var(--text-1)]' : 'text-[var(--text-3)] hover:bg-white hover:text-[var(--text-1)]'}`}>
                                        <item.icon className={`w-5 h-5 m-3 shrink-0 ${isActive ? 'text-[var(--accent)]' : ''}`} />
                                        {item.label}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>

            {/* Upcoming */}
            <div className="mt-auto border border-[var(--border)] rounded-[13px] bg-[var(--surface)] flex flex-col gap-0.5 px-2 py-1">
                <span className="[font-family:var(--mono)] text-[11px] font-medium text-[var(--text-3)] leading-none p-3">UP NEXT</span>
                <span className="[font-family:var(--heading)] text-base text-[var(--text-1)] leading-none px-3 pb-3">This {upcomingEvent.weekday} · {upcomingEvent.time}</span>
            </div>

            {/* User */}
            <div className="flex items-center gap-3 pt-3">
                <div className="w-10 h-10 shrink-0">
                    <img className="w-full h-full rounded-full object-cover object-center ring-1 ring-white" src={currentMember.avatarUrl} alt={currentMember.name} />
                </div>
                <div>
                    <div className="text-sm font-medium text-[var(--text-1)]">{currentMember.name}</div>
                    <div className="text-xs text-[var(--text-3)]">{currentMember.sessionsPlayed} sessions · {currentMember.playedGames} games</div>
                </div>
            </div>

        </nav>
    )
}
