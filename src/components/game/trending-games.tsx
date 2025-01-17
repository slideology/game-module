import { Game } from '@/lib/types'
import { GameCard } from '@/components/ui/game-card'

export function TrendingGames({ 
  games,
  currentGameId
}: { 
  games: Game[]
  currentGameId: string
}) {
  // 过滤掉当前游戏
  const filteredGames = games.filter(game => game.id !== currentGameId)
  
  if (!filteredGames.length) return null

  return (
    <section id="trending" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trending Games
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Most popular games right now
            </p>
          </div>
          <div>
            <a
              href="/trending"
              className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              View all games <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredGames.slice(0, 4).map((game) => (
            <GameCard key={game.id} game={game} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  )
}
