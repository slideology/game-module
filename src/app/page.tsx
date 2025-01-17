import { getFeaturedGames, getTrendingGames, getNewGames } from '@/lib/games'
import GameCarousel from '@/components/game/game-carousel'
import GameSection from '@/components/game/game-section'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export default async function Home() {
  const [featuredGames, trendingGames, newGames] = await Promise.all([
    getFeaturedGames(),
    getTrendingGames(),
    getNewGames()
  ])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' }
          ]}
        />
        
        {/* 特色游戏轮播 */}
        <div className="mb-12">
          <GameCarousel games={featuredGames} />
        </div>

        {/* 热门游戏 */}
        <GameSection
          title="热门游戏"
          subtitle="最受欢迎的游戏精选"
          games={trendingGames}
          viewAllLink="/games/trending"
        />

        {/* 最新游戏 */}
        <GameSection
          title="最新上线"
          subtitle="刚刚加入的精彩游戏"
          games={newGames}
          viewAllLink="/games/new"
        />
      </div>
    </div>
  )
}
