import { type Game } from '../types/index.ts'

/*
 * Enrichment status — data pulled from BGG / box listings via web lookup.
 *
 *  ✅ VERIFIED this batch (id): 3, 4, 5, 7, 8, 13, 20, 24, 103
 *  ⏳ TODO: every entry marked `// TODO` still needs a BGG lookup.
 *  ⏭️  KEPT AS-IS (local/custom, not on BGG): 1, 6, 36, 45, 61, 70, 87
 *
 * Notes:
 *  - `minPlayers/maxPlayers/minDuration/maxDuration/description` are filled from
 *    the publisher box + BGG listing (reliable).
 *  - `weight` (BGG complexity) and `rating` (BGG average) only appear on BGG's
 *    stats page, which isn't directly scrapeable, so they're included ONLY where a
 *    source explicitly quoted the number. Otherwise omitted (optional fields).
 *  - `categories` are strings; if your `Category` type is an enum/object, tell me
 *    its shape and I'll convert them.
 */

export const games: Game[] = [
  // ⏭️ local/custom — kept as-is, stub fields added only so it compiles
  { id: 1, name: "#inconversible", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0, isActive: false }, // skip (not on BGG)
  { id: 2, name: "A Place For All My Books", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  {
    id: 3,
    name: "Azul",
    description: "A tile-drafting game in which players take turns selecting colored tiles from factory displays and the central pool, then arrange them on their player board to decorate the walls of a royal palace. Points are scored for placement patterns and completed sets, while wasted tiles cost points. The player with the most points after the final round wins.",
    categories: [4],
    minPlayers: 2,
    maxPlayers: 4,
    minDuration: 30,
    maxDuration: 45,
    isActive: true,
  },
  {
    id: 4,
    name: "Azul: Stained Glass of Sintra",
    description: "A standalone game in the Azul series. Players draft glass panes to fill double-sided window strips on their palace board over six rounds, moving a glazier pawn that restricts which window can be worked on. Careful placement scores points while broken glass costs them.",
    categories: [4],
    minPlayers: 2,
    maxPlayers: 4,
    minDuration: 30,
    maxDuration: 45,
    isActive: true,
  },
  {
    id: 5,
    name: "Azul: Summer Pavilion",
    description: "The third game in the Azul series. Players draft diamond-shaped tiles — one color is wild each round — and use them to build star patterns on their player board across six rounds, earning bonus tiles and scoring for completed stars.",
    categories: [4],
    weight: 2.66,
    minPlayers: 2,
    maxPlayers: 4,
    minDuration: 30,
    maxDuration: 45,
    isActive: true,
  },
  { id: 6, name: "Bayad Po", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // skip (not on BGG)
  {
    id: 7,
    name: "Boop",
    description: "A two-player abstract game played on a quilted bed. Placing a kitten 'boops' adjacent pieces one space away; line up three kittens to graduate them into cats, and get three cats in a row to win — while both players constantly knock pieces around.",
    categories: [3,4],
    weight: 1.80,
    minPlayers: 2,
    maxPlayers: 2,
    minDuration: 20,
    maxDuration: 30,
    isActive: true,
  },
  {
    id: 8,
    name: "Calico",
    description: "A puzzly tile-placement game about sewing a quilt. Players draft and place hexagonal patch tiles to create color groups (for buttons) and pattern combinations (to attract cats), while completing personal design goals. Most points wins.",
    categories: [3,4],
    minPlayers: 1,
    maxPlayers: 4,
    minDuration: 30,
    maxDuration: 45,
    isActive: true,
  },
  { id: 9, name: "Carnuta", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 10, name: "Casting Shadows", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 11, name: "Clank", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 12, name: "Cluedo", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  {
    id: 13,
    name: "Coup",
    description: "A fast social-deduction card game set in a dystopian future. Each player has two hidden character cards and bluffs about which roles they hold to take powerful actions, challenging and eliminating rivals. The last player with influence remaining wins.",
    categories: [1,5,6],
    minPlayers: 2,
    maxPlayers: 6,
    minDuration: 15,
    maxDuration: 15,
    isActive: true,
  },
  { id: 14, name: "Crash Octopus", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 15, name: "Crossing", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 16, name: "D&D Dungeon Mayhem", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 17, name: "Decrypto", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 18, name: "Deep Sea Adventure", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 19, name: "Digit Code", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  {
    id: 20,
    name: "Dixit",
    description: "A storytelling and guessing game using surreal illustrated cards. Each round one player is the storyteller and gives a clue for a chosen card; the others submit cards to match it, then everyone votes to find the storyteller's card. Scoring rewards clues that are neither too obvious nor too obscure.",
    categories: [1,5],
    minPlayers: 3,
    maxPlayers: 6,
    minDuration: 30,
    maxDuration: 30,
    isActive: true,
  },
  { id: 21, name: "Donjaru", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 22, name: "DroPolter", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 23, name: "Eternal Decks", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  {
    id: 24,
    name: "Everdell",
    description: "A worker-placement and tableau-building game in which players lead forest creatures building a city over four seasons. Players place workers to gather resources and play construction and critter cards, aiming to build the highest-scoring city before winter arrives.",
    categories: [1,3,7],
    minPlayers: 1,
    maxPlayers: 4,
    minDuration: 40,
    maxDuration: 80,
    isActive: true,
  },
  { id: 25, name: "Everdell: Bellfaire", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG (expansion)
  { id: 26, name: "Everdell: Newleaf", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG (expansion)
  { id: 27, name: "Everdell: Pearlbrook", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG (expansion)
  { id: 28, name: "Fast Fashion", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 29, name: "Flamenco", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 30, name: "Flip 7", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 31, name: "Fold-it", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 32, name: "Food Alley", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 33, name: "Fromage", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 34, name: "Furmation of Rome", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 35, name: "Got Five!", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 36, name: "Halo halo", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // skip (not on BGG)
  { id: 37, name: "Harmonies", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 38, name: "Harvest", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 39, name: "Hegemony", description: "", imgUrl: "https://cf.geekdo-images.com/DCLgJlrvB-EqL6A3WgQLMQ__imagepage/img/TPrT8nP5BQ-wEEiknfXh0a9b0PE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5715770.jpg", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 40, name: "Herd Mentality", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 41, name: "Hues and Cues", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 42, name: "Illusion", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 43, name: "Insider", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 44, name: "Just One", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 45, name: "Kalikasan", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // skip (not on BGG)
  { id: 46, name: "Kushi Express", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 47, name: "Let's Go To Japan", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 48, name: "Love Letter", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 49, name: "Magical Athlete", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 50, name: "Mahjong", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 51, name: "Maskmen", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 52, name: "Meow 10", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 53, name: "Nine Tiles Panic! - Pokemon", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 54, name: "One Word", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 55, name: "Parks", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 56, name: "Parks (2nd Edition)", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 57, name: "Parks: Roll & Hike", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 58, name: "Petiquette", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 59, name: "Pho Pho", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 60, name: "Pick n Packers", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 61, name: "Play for fun", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // skip (not on BGG)
  { id: 62, name: "Poetry for Neanderthals", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 63, name: "Power Grid", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 64, name: "Psycho Killer", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 65, name: "River Valley Glassworks", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 66, name: "Root", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 67, name: "SCOUT", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 68, name: "Sagrada", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 69, name: "Secret Hitler", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 70, name: "Sinigang", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // skip (not on BGG)
  { id: 71, name: "Skull", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 72, name: "Sky Team", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 73, name: "Slay the Spire", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 74, name: "Snow White x Eleven Dwarfs", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 75, name: "Souvenirs from Venice", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 76, name: "Splendor", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 77, name: "Splendor: Pokemon", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 78, name: "Spot It", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 79, name: "Stardew Valley the Board Game", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 80, name: "Startups", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 81, name: "Stella", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 82, name: "Stool Pigeon", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 83, name: "Sushi Go", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 84, name: "Sushi Go Party!", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 85, name: "Sushi Go! Spin some for Dimsum", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 86, name: "Sushi Omakase", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 87, name: "TRND", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // skip (not on BGG)
  { id: 88, name: "Tapple", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 89, name: "Tea Witches", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 90, name: "Terraforming Mars", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 91, name: "The Quest for El Dorado", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 92, name: "The Resistance", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 93, name: "The Vale of Eternity", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 94, name: "Tiger & Dragon", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 95, name: "Tokaido", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 96, name: "Too Many Crowns", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 97, name: "Town 77", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 98, name: "Trails", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 99, name: "Troika", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 100, name: "Tropichaos", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 101, name: "Turing Machine", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  { id: 102, name: "Unmatched: Stars and Stripes", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
  {
    id: 103,
    name: "Wingspan",
    description: "A competitive engine-building game where players are bird enthusiasts attracting birds to a network of habitats. Each bird played triggers chains of abilities across three habitats — gaining food, laying eggs, or drawing cards. The player with the most points after four rounds wins.",
    imgUrl: "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepage/img/uIjeoKgHMcRtzRSR4MoUYl3nXxs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4458123.jpg",
    categories: [1,3],
    weight: 2.46,
    minPlayers: 1,
    maxPlayers: 5,
    minDuration: 40,
    maxDuration: 70,
    isActive: true,
  },
  { id: 104, name: "Wondrous Creatures", description: "", minPlayers: 0, maxPlayers: 0, minDuration: 0, maxDuration: 0 }, // TODO: fetch from BGG
];