import type { CurrentUser, UpcomingEvent } from '../types/index'

export const currentUser: CurrentUser = {
    name: 'Perry',
    sessionsPlayed: 42,
    playedGames: 32,
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}

export const upcomingEvent: UpcomingEvent = {
    weekday: 'Friday',
    date: new Date('2024-06-28'),
    time: '7:30 PM',
    venue: 'Camia'
}
