'use client'

import Link from 'next/link'

const categories = [
  { id: 'action', name: 'Action', color: 'bg-blue-500' },
  { id: 'adventure', name: 'Adventure', color: 'bg-green-500' },
  { id: 'arcade', name: 'Arcade', color: 'bg-yellow-500' },
  { id: 'puzzle', name: 'Puzzle', color: 'bg-purple-500' },
  { id: 'racing', name: 'Racing', color: 'bg-red-500' },
  { id: 'sports', name: 'Sports', color: 'bg-orange-500' },
  { id: 'strategy', name: 'Strategy', color: 'bg-teal-500' },
]

interface CategoryNavProps {
  variant?: 'vertical' | 'horizontal'
}

export function CategoryNav({ variant = 'vertical' }: CategoryNavProps) {
  if (variant === 'horizontal') {
    return (
      <nav className="overflow-x-auto pb-2">
        <ul className="flex space-x-2 min-w-max">
          {categories.map(category => (
            <li key={category.id}>
              <Link
                href={`/category/${category.id}`}
                className={`inline-block px-3 py-1.5 rounded-lg text-white ${category.color} hover:opacity-90 text-sm whitespace-nowrap`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <aside className="w-48 flex-shrink-0">
      <nav className="sticky top-4">
        <h2 className="font-bold text-lg mb-4">Categories</h2>
        <ul className="space-y-1">
          {categories.map(category => (
            <li key={category.id}>
              <Link
                href={`/category/${category.id}`}
                className={`block px-3 py-2 rounded-lg text-white ${category.color} hover:opacity-90 text-sm`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
