import { getGamesByCategory } from '@/lib/games'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { GameGrid } from '@/components/game/game-grid'
import { CategoryNav } from '@/components/game/category-nav'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const games = await getGamesByCategory(params.slug)
  
  if (!games.length) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: games[0].category, href: `/category/${params.slug}` }
          ]}
        />

        <div className="flex gap-8 mt-8">
          {/* 分类导航 */}
          <div className="w-64 flex-shrink-0">
            <CategoryNav currentCategory={params.slug} />
          </div>

          {/* 游戏列表 */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {games[0].category}
            </h1>
            <GameGrid games={games} />
          </div>
        </div>
      </div>
    </div>
  )
}
