'use client';

import { ChevronRight } from 'lucide-react';
import GameCard from './game-card';
import Link from 'next/link';

interface Game {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  rating: number;
  playCount: number;
}

interface GameSectionProps {
  title: string;
  subtitle?: string;
  games: Game[];
  viewAllLink?: string;
}

export default function GameSection({ title, subtitle, games, viewAllLink }: GameSectionProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
            )}
          </div>
          {viewAllLink && (
            <Link 
              href={viewAllLink}
              className="flex items-center gap-1 text-pink-500 hover:text-pink-600 transition-colors"
            >
              查看全部
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* 游戏网格 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {games.map((game) => (
            <GameCard
              key={game.id}
              {...game}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
