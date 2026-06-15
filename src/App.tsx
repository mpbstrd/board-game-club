import { useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { members } from './data/memberData'
import { currentUser, upcomingEvent } from './data/mockData'
import AppContext from './context/AppContext'
import Dashboard from './components/Dashboard'
import Library from './components/Library'
import Collection from './components/Collection'
import Leaderboard from './components/Leaderboard'
import Sessions from './components/Sessions'
import Schedule from './components/Schedule'
import Tools from './components/Tools'
import { Menu } from 'lucide-react'
import './App.css'

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [event, setEvent] = useState(upcomingEvent)
  const currentMember = members.find(m => m.id === currentUser.id)!

  const setRsvp = useCallback((status: 'going' | 'maybe' | 'cant') => {
    setEvent(prev => {
      const id = currentUser.id
      const without = (arr: number[]) => arr.filter(x => x !== id)
      return {
        ...prev,
        going: status === 'going' ? [...without(prev.going), id] : without(prev.going),
        maybe: status === 'maybe' ? [...without(prev.maybe), id] : without(prev.maybe),
        cant:  status === 'cant'  ? [...without(prev.cant),  id] : without(prev.cant),
      }
    })
  }, [])

  return (
    <AppContext.Provider value={{ currentUser, currentMember, upcomingEvent: event, members, setRsvp }}>
      <div className="bg-[var(--bg)]">

        {/* Mobile top bar */}
        <header className="lg:hidden sticky top-0 z-30 flex items-center h-14 px-4 bg-[var(--bg-2)] border-b border-[var(--border-soft)]">
          <button
            onClick={() => setMobileNavOpen(true)}
            className="p-2 -ml-2 rounded-lg text-[var(--text-3)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
          <span className="[font-family:var(--heading)] text-lg font-medium text-[var(--text-1)] mt-1 ml-2">Friday Board Games Club</span>
        </header>

        <div className="flex items-start">

          {/* Backdrop */}
          {mobileNavOpen && (
            <div
              className="lg:hidden fixed inset-0 z-40 bg-black/40"
              onClick={() => setMobileNavOpen(false)}
            />
          )}

          <Navigation isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

          <main className="flex-1 min-w-0 overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/library" element={<Library />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/sessions" element={<Sessions />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/tools" element={<Tools />} />
            </Routes>
          </main>

        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
