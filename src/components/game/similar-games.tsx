import { Game } from '@/lib/types'
import { GameCard } from '@/components/ui/game-card'

export function SimilarGames({ 
  games,
  currentGame
}: { 
  games: Game[]
  currentGame: Game
}) {
  if (!games.length) return null

  return (
    <section id="similar" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Similar to {currentGame.name}
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          If you enjoy {currentGame.name}, you might also like these games
        </p>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  )
}
