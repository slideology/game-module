'use client'

import { Game } from '@/lib/types'
import { GameCard } from '@/components/ui/game-card'

export function GameGrid({ games }: { games: Game[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {games.map(game => (
        <GameCard 
          key={game.id}
          id={game.id}
          title={game.title}
          imageUrl={game.imageUrl}
          category={game.category}
          rating={game.rating}
          playCount={game.playCount}
        />
      ))}
    </div>
  )
}
