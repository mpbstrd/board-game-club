import { createContext, useContext } from 'react'
import { type CurrentUser, type UpcomingEvent, type Member } from '../types/index'

type AppContextType = {
    currentUser: CurrentUser
    currentMember: Member
    upcomingEvent: UpcomingEvent
    members: Member[]
}

const AppContext = createContext<AppContextType | null>(null)

export function useAppContext() {
    const ctx = useContext(AppContext)
    if (!ctx) throw new Error('useAppContext must be used inside AppProvider')
    return ctx
}

export default AppContext
