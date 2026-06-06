import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { currentUser, upcomingEvent } from './data/mockData'
import Dashboard from './components/Dashboard'
import Library from './components/Library'
import Collection from './components/Collection'
import Leaderboard from './components/Leaderboard'
import Sessions from './components/Sessions'
import Schedule from './components/Schedule'
import './App.css'

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
