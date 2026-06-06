import { HomeIcon, LibraryIcon, CollectionIcon, LeaderboardIcon, SessionsIcon, ScheduleIcon, BrandMarkIcon } from '../assets/icons'
import { Link } from 'react-router-dom'
import '../styles/navigation.css'

type NavItem = {
    to: string,
    icon: React.ComponentType<{className?: string}>,
    label: string
}

const navItems: NavItem[] = [
    {to: '/', icon: HomeIcon, label: 'Home'},
    {to: '/library', icon: LibraryIcon, label: 'Library'},
    {to: '/collection', icon: CollectionIcon, label: 'Collection'},
    {to: '/leaderboard', icon: LeaderboardIcon, label: 'Leaderboard'},
    {to: '/sessions', icon: SessionsIcon, label: 'Sessions'},
    {to: '/schedule', icon: ScheduleIcon, label: 'Schedule'},
]

export function Navigation() {
    return (
        <nav className="nav">
            <div className="nav-brand">
                <div className="nav-brand-icon">
                    <BrandMarkIcon size={22} />
                </div>
                <div className="nav-brand-text">
                    <span className="nav-brand-title">Friday</span>
                    <span className="nav-brand-subtitle">Board Games Club</span>
                </div>
            </div>
            <ul className="nav-list">
                {navItems.map((item) => (
                    <li key={item.to}>
                        <Link to={item.to} className="nav-item">
                            <item.icon className="nav-icon" />{item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}