import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import Dashboard from './components/Dashboard'
import Library from './components/Library'
import Collection from './components/Collection'
import Leaderboard from './components/Leaderboard'
import Sessions from './components/Sessions'
import Schedule from './components/Schedule'
import './App.css'

function App() {
  const mainStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg)',
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'flex-start',
    height: '100vh'
  }
  return (
    <div style={mainStyle}>
      <Navigation />
      <main style={{flex: 1}}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/library" element={<Library />}/>
        <Route path="/collection" element={<Collection />}/>
        <Route path="/leaderboard" element={<Leaderboard />}/>
        <Route path="/sessions" element={<Sessions />}/>
        <Route path="/schedule" element={<Schedule />}/>
      </Routes>
      </main>
    </div>
  )
}

export default App
