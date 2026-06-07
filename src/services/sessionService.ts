import { games } from '../data/gamesData'
import { locations } from '../data/locationsData'
import { sessions } from '../data/sessionData'
import { members } from '../data/memberData'
import { type TopVenues, type MonthlySessionCount, type TopGames, type TopMembers } from '../types'

export function getTotalSessions() {
    return members.reduce((sum, m) => sum + m.sessionsPlayed, 0)
}

export function getSessionsPerMonth(): MonthlySessionCount[] {
    const counts: Record<string, number> = {}
    for (const session of sessions) {
        const key = session.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        counts[key] = (counts[key] ?? 0) + 1
    }
    return Object.entries(counts).map(([month, count]) => ({ month, count }))
}

export function getTopVenues(maxVenues: number): TopVenues[]{
    const counts: Record<number, number> = {}
    for(const session of sessions){
        for(const location of session.location){
            counts[location] = (counts[location] ?? 0) + 1
        }
    }
    return Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, maxVenues)
        .map(([id, count], index) => ({
            rank: index + 1,
            name: locations.find(l => l.id === Number(id))?.name ?? 'Unknown',
            count
        }))
}

export function getMostPlayedGames(maxGames: number): TopGames[]{
    const count: Record<number, number> = {}
    for(const session of sessions){
        for(const game of session.games){
            count[game] = (count[game] ?? 0) + 1
        }
    }

    return Object.entries(count)
        .sort((a,b) => b[1] - a[1])
        .slice(0, maxGames)
        .map(([id, count], index) => ({
            rank: index + 1,
            name: games.find(g => g.id === Number(id))?.name ?? 'Unknown game',
            count
        }))
}


export function getMembersAttendanceRanking(): TopMembers[]{
    const count: Record<number, number> = {}
    for(const session of sessions){
        for(const player of session.players){
            count[player] = (count[player] ?? 0) + 1
        }
    }

    return Object.entries(count)
        .sort((a,b) => b[1] - a[1])
        .map(([id, count], index) => ({
            rank: index + 1,
            name: members.find(g => g.id === Number(id))?.name ?? 'Unknown game',
            count
        }))
}