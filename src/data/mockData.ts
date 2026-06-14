import type { CurrentUser, UpcomingEvent } from '../types/index'

export const currentUser: CurrentUser = {
    id: 1,
    
}

export const upcomingEvent: UpcomingEvent = {
    weekday: 'Friday',
    date: new Date('2026-06-26'),
    time: '7:30 PM',
    venue: 'Camia',
    going: [1,2,3,4,5],
    maybe: [6],
    cant: [7,8]
}