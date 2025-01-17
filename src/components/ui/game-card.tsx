'use client'

import { Game } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

export function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game.id}`} className="block group">
      <div className="aspect-square relative overflow-hidden rounded-lg">
        <Image
          src={game.thumbnail}
          alt={game.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <h3 className="mt-2 text-sm font-medium text-gray-900 group-hover:text-red-500">
        {game.name}
      </h3>
    </Link>
  )
}
