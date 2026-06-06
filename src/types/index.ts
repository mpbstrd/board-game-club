export type CurrentUser = {
    name: string,
    sessionsPlayed: number,
    playedGames: number,
    avatarUrl: string
}

export type UpcomingEvent = {
    weekday: string,
    date: Date,
    time: string,
    venue: string,
}