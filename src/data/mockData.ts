import type { CurrentUser, UpcomingEvent } from '../types/index'

export const currentUser: CurrentUser = {
    id: 1,
    
}

export const upcomingEvent: UpcomingEvent = {
    weekday: 'Friday',
    date: new Date('2026-06-26'),
    time: '7:30 PM',
    venue: 'Camia',
    mainGame: 'Wingspan',
    mainGameImageUrl: 'https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepage/img/uIjeoKgHMcRtzRSR4MoUYl3nXxs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4458123.jpg',
    going: [1,2,3,4,5],
    maybe: [6],
    cant: [7,8]
}