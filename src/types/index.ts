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
    mainGame: string,
    mainGameImageUrl: string,
    going: Member[],
    maybe: Member[],
    cant: Member[],
}

export type Member = {
    name: string,
    sessionsPlayed: number,
    playedGames: number,
    avatarUrl: string
}