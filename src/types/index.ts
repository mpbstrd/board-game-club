export type CurrentUser = {
    id: number
}

export type UpcomingEvent = {
    weekday: string
    date: Date
    time: string
    venue: string
    mainGame?: string
    mainGameImageUrl?: string
    going: number[]
    maybe: number[]
    cant: number[]
}

export type Member = {
    id: number
    name: string
    sessionsPlayed: number
    playedGames: number
    avatarUrl: string
    isAdmin: boolean
}

export type Session = {
    sessionNo: number
    date: Date
    players: number[]
    games: number[]
    location: number[]
}

export type Location = {
    id: number
    name: string
}

export type Game = {
    id: number
    name: string
    description: string
    imgUrl?: string
    categories?: number[]
    weight?: number
    minPlayers: number
    maxPlayers: number
    minDuration: number
    maxDuration: number
    rating?: number
    isActive?: boolean
}

export type Category = {
    id: number
    name: string
    color?: string
}

// Session Types

export type TopProperty = {
    rank: number
    name: string
    count: number
}

export type MonthlySessionCount = {
    month: string
    count: number
}
