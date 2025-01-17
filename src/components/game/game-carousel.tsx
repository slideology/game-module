'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselGame {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface GameCarouselProps {
  games: CarouselGame[];
}

export default function GameCarousel({ games }: GameCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % games.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [games.length]);

  // 切换到上一张
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + games.length) % games.length);
  };

  // 切换到下一张
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % games.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
      {/* 主轮播图 */}
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {games.map((game) => (
          <div
            key={game.id}
            className="w-full h-full flex-shrink-0 relative"
          >
            <Image
              src={game.imageUrl}
              alt={game.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <div className="max-w-7xl mx-auto">
                <span className="inline-block px-3 py-1 bg-pink-500 text-white rounded-full text-sm mb-3">
                  {game.category}
                </span>
                <h2 className="text-4xl font-bold text-white mb-2">{game.title}</h2>
                <p className="text-gray-200 text-lg max-w-2xl">{game.description}</p>
                <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-colors">
                  开始游戏
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 导航按钮 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {games.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
