import type { CurrentUser, UpcomingEvent, Member } from '../types/index'

export const currentUser: CurrentUser = {
    id: 1,
    
}

export const members: Member[] = [
    {
        id: 1,
        name: 'Perry',
        sessionsPlayed: 30,
        playedGames: 130,
        avatarUrl: 'https://i.pravatar.cc/300'
    },
    {
        id: 2,
        name: 'DK',
        sessionsPlayed: 20,
        playedGames: 60,
        avatarUrl: 'https://i.pravatar.cc/3'
    },
    {
        id: 3,
        name: 'Watson',
        sessionsPlayed: 31,
        playedGames: 180,
        avatarUrl: 'https://i.pravatar.cc/6'
    },
    {
        id: 4,
        name: 'Tres',
        sessionsPlayed: 32,
        playedGames: 189,
        avatarUrl: 'https://i.pravatar.cc/53'
    },
    {
        id: 5,
        name: 'Joyce',
        sessionsPlayed: 25,
        playedGames: 79,
        avatarUrl: 'https://i.pravatar.cc/35'
    },
    {
        id: 6,
        name: 'Ian',
        sessionsPlayed: 10,
        playedGames: 42,
        avatarUrl: 'https://i.pravatar.cc/61'
    },
    {
        id: 7,
        name: 'Kim',
        sessionsPlayed: 4,
        playedGames: 20,
        avatarUrl: 'https://i.pravatar.cc/22'
    },
    {
        id: 8,
        name: 'Kyle',
        sessionsPlayed: 3,
        playedGames: 15,
        avatarUrl: 'https://i.pravatar.cc/32'
    }
];

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