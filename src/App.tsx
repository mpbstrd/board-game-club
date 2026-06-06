import { Routes, Route } from 'react-router-dom'
import { Navigation, type CurrentUser, type UpcomingEvent } from './components/Navigation'
import Dashboard from './components/Dashboard'
import Library from './components/Library'
import Collection from './components/Collection'
import Leaderboard from './components/Leaderboard'
import Sessions from './components/Sessions'
import Schedule from './components/Schedule'
import './App.css'

const upcomingEvent: UpcomingEvent = {
    weekday: 'Friday',
    time: '7:30 PM'
}

const currentUser: CurrentUser = {
    name: 'Perry',
    sessionsPlayed: 42,
    playedGames: 32,
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}

function App() {

  return (
    <div className="bg-[var(--bg)] flex flex-row items-start h-screen">
      <Navigation currentUser={currentUser} upcomingEvent={upcomingEvent} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/library" element={<Library />}/>
        <Route path="/collection" element={<Collection />}/>
        <Route path="/leaderboard" element={<Leaderboard />}/>
        <Route path="/sessions" element={<Sessions />}/>
        <Route path="/schedule" element={<Schedule />}/>
      </Routes>
    </div>
  )
}

export default App
