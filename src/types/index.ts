export type CurrentUser = {
    id: number
}

export type UpcomingEvent = {
    weekday: string,
    date: Date,
    time: string,
    venue: string,
    mainGame: string,
    mainGameImageUrl: string,
    going: number[],
    maybe: number[],
    cant: number[],
}

export type Member = {
    id: number,
    name: string,
    sessionsPlayed: number,
    playedGames: number,
    avatarUrl: string
}

export type Venue = {

}