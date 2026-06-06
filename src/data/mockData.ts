import type { CurrentUser, UpcomingEvent, Member } from '../types/index'

export const currentUser: CurrentUser = {
    name: 'Perry',
    sessionsPlayed: 42,
    playedGames: 130,
    avatarUrl: 'https://i.pravatar.cc/300'
}

export const members: Member[] = [
    {
        name: 'Perry',
        sessionsPlayed: 30,
        playedGames: 130,
        avatarUrl: 'https://i.pravatar.cc/300'
    },
    {
        name: 'DK',
        sessionsPlayed: 20,
        playedGames: 60,
        avatarUrl: 'https://i.pravatar.cc/3'
    },
    {
        name: 'Watson',
        sessionsPlayed: 31,
        playedGames: 180,
        avatarUrl: 'https://i.pravatar.cc/6'
    },
    {
        name: 'Tres',
        sessionsPlayed: 32,
        playedGames: 189,
        avatarUrl: 'https://i.pravatar.cc/53'
    },
    {
        name: 'Joyce',
        sessionsPlayed: 25,
        playedGames: 79,
        avatarUrl: 'https://i.pravatar.cc/35'
    },
    {
        name: 'Ian',
        sessionsPlayed: 10,
        playedGames: 42,
        avatarUrl: 'https://i.pravatar.cc/61'
    },
    {
        name: 'Kim',
        sessionsPlayed: 4,
        playedGames: 20,
        avatarUrl: 'https://i.pravatar.cc/22'
    },
    {
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
    mainGameImageUrl:    'https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepage/img/uIjeoKgHMcRtzRSR4MoUYl3nXxs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4458123.jpg',
    going: [members[1], members[2],members[3], members[4], members[0]],
    maybe: [members[5]],
    cant: [members[6], members[7]]
}