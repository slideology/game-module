import { Game } from '@/lib/types'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Play', href: '#play' },
  { name: 'About', href: '#about' },
  { name: 'Similar Games', href: '#similar' },
  { name: 'Trending', href: '#trending' },
  { name: 'Social', href: '#social' },
  { name: 'FAQ', href: '#faq' },
]

export function GameNavigation({ game }: { game: Game }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link 
                href="/"
                className="text-lg font-semibold text-gray-900"
              >
                {game.name}
              </Link>
            </div>
          </div>
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
