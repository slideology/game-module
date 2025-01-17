'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { 
  Gamepad2,
  Sword,
  Brain,
  Car,
  Crown,
  Rocket,
  Building,
  Users
} from 'lucide-react';

const categories = [
  { id: 'action', name: '动作冒险', icon: Sword },
  { id: 'puzzle', name: '休闲益智', icon: Brain },
  { id: 'racing', name: '竞速', icon: Car },
  { id: 'strategy', name: '策略', icon: Crown },
  { id: 'shooting', name: '射击', icon: Rocket },
  { id: 'simulation', name: '模拟经营', icon: Building },
  { id: 'sports', name: '体育', icon: Users },
  { id: 'arcade', name: '街机', icon: Gamepad2 },
];

interface CategoryNavProps {
  currentCategory?: string;
}

export function CategoryNav({ currentCategory }: CategoryNavProps) {
  return (
    <nav className="space-y-1">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className={cn(
              'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors',
              currentCategory === category.id
                ? 'bg-pink-500 text-white'
                : 'text-gray-700 dark:text-gray-200 hover:bg-pink-100 dark:hover:bg-pink-900/50'
            )}
          >
            <Icon className="w-5 h-5 mr-3" />
            {category.name}
          </Link>
        );
      })}
    </nav>
  );
}
