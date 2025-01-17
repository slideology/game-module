import { getGame, getGamesByCategory } from '@/lib/games'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { GameHero } from '@/components/game/game-hero'
import { GameAbout } from '@/components/game/game-about'
import GameSection from '@/components/game/game-section'
import { notFound } from 'next/navigation'

interface GamePageProps {
  params: {
    id: string
  }
}

export default async function GamePage({ params }: GamePageProps) {
  const game = await getGame(params.id)
  
  if (!game) {
    notFound()
  }

  // 获取同类游戏推荐
  const similarGames = await getGamesByCategory(game.category)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: game.category, href: `/category/${game.category.toLowerCase()}` },
            { label: game.title, href: `/game/${game.id}` }
          ]}
        />

        {/* 游戏英雄区 */}
        <GameHero game={game} />

        {/* 游戏详情 */}
        <div className="mt-12">
          <GameAbout game={game} />
        </div>

        {/* 相似游戏推荐 */}
        <div className="mt-16">
          <GameSection
            title="相似游戏推荐"
            subtitle="你可能也会喜欢"
            games={similarGames.filter(g => g.id !== game.id).slice(0, 5)}
            viewAllLink={`/category/${game.category.toLowerCase()}`}
          />
        </div>
      </div>
    </div>
  )
}
