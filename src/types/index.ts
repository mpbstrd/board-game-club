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

export interface Session {
  sessionNo: number;
  date: Date;
  players: number[];
  games: number[];
  location: number[];
}

export interface Location {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
}

// Session Types

export type TopVenues = {
    rank: number,
    name: string,
    count: number
}

export type TopGames = {
    rank: number,
    name: string,
    count: number
}

export type TopMembers = {
    rank: number,
    name: string,
    count: number
}

export type MonthlySessionCount = {
    month: string,
    count: number
}

