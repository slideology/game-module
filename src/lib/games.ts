import { promises as fs } from 'fs'
import path from 'path'
import { Game } from './types'

async function getFeaturedGamesData() {
  const filePath = path.join(process.cwd(), 'config/games/featured-games.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export async function getFeaturedGames(): Promise<Game[]> {
  const data = await getFeaturedGamesData()
  return data.featured
}

export async function getTrendingGames(): Promise<Game[]> {
  const data = await getFeaturedGamesData()
  return data.trending
}

export async function getNewGames(): Promise<Game[]> {
  const data = await getFeaturedGamesData()
  return data.new
}

export async function getAllGames(): Promise<Game[]> {
  const data = await getFeaturedGamesData()
  return [...data.featured, ...data.trending, ...data.new]
}

export async function getGame(id: string): Promise<Game | null> {
  const games = await getAllGames()
  return games.find(game => game.id === id) || null
}

export async function getGamesByCategory(category: string): Promise<Game[]> {
  const games = await getAllGames()
  return games.filter(game => game.category.toLowerCase() === category.toLowerCase())
}
