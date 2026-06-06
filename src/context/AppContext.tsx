import { createContext, useContext } from 'react'
import { type CurrentUser, type UpcomingEvent } from '../types/index'

type AppContextType = {
    currentUser: CurrentUser
    upcomingEvent: UpcomingEvent
}

const AppContext = createContext<AppContextType | null>(null)

export function useAppContext() {
    const ctx = useContext(AppContext)
    if (!ctx) throw new Error('useAppContext must be used inside AppProvider')
    return ctx
}

export default AppContext
