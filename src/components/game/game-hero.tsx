import Image from 'next/image'
import { Game } from '@/lib/types'
import { PlayButton } from '@/components/ui/play-button'

export function GameHero({ game }: { game: Game }) {
  return (
    <div className="relative">
      {/* 背景图片 */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <Image
          src={game.bannerImage || game.thumbnail}
          alt={game.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      </div>

      {/* 游戏内容 */}
      <div className="relative pt-32 pb-16 sm:pt-48 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {game.name}
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            {game.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <PlayButton gameUrl={game.iframe_url} />
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
