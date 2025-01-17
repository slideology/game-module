'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Play, Star } from 'lucide-react';

interface GameCardProps {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  rating: number;
  playCount: number;
}

export default function GameCard({ id, title, imageUrl, category, rating, playCount }: GameCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1">
      {/* 游戏图片 */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* 悬浮遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Link href={`/game/${id}`}>
              <button className="w-full py-2 bg-pink-500 text-white rounded-full flex items-center justify-center gap-2 hover:bg-pink-600 transition-colors">
                <Play className="w-4 h-4" />
                开始游戏
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 游戏信息 */}
      <div className="p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-500 rounded-full">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{rating}</span>
          </div>
        </div>
        <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {playCount.toLocaleString()} 人在玩
        </p>
      </div>
    </div>
  );
}
