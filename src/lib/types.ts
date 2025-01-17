export type Game = {
  id: string
  title: string
  description: string
  longDescription?: string
  imageUrl: string
  categories: string[]
  rating: number
  playCount: number
}

export type Category = {
  id: string
  name: string
  slug: string
}

export type GameConfig = {
  default_theme: {
    gradient: string
    title_color: string
    button_color: string
  }
  games: Record<string, Game>
}

export type FAQ = {
  question: string
  answer: string
  category?: string
}

export type GameFAQs = {
  [gameId: string]: {
    title: string
    faqs: FAQ[]
  }
}

export type SocialVideo = {
  id: string
  platform: 'youtube' | 'twitch'
  title: string
  thumbnail: string
  url: string
  views: number
  creator: string
  createdAt: string
}

export type GameSection = {
  featured: Game[]
  trending: Game[]
  new: Game[]
}
