import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-purple-600">
          Sprunkr
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/games" className="text-gray-600 hover:text-gray-900">
            Games
          </Link>
        </div>
      </div>
    </nav>
  )
}

export function Sidebar() {
  const categories = [
    { name: 'Action', color: 'bg-blue-500' },
    { name: 'Adventure', color: 'bg-green-500' },
    { name: 'Arcade', color: 'bg-yellow-500' },
    { name: 'Puzzle', color: 'bg-purple-500' },
    { name: 'Racing', color: 'bg-red-500' },
    { name: 'Sports', color: 'bg-orange-500' },
    { name: 'Strategy', color: 'bg-teal-500' },
  ]

  return (
    <div className="w-64 p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.name.toLowerCase()}`}
            className={`block ${category.color} text-white p-2 rounded hover:opacity-90 transition-opacity`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-start">
          <Link href="/" className="text-xl font-bold text-purple-600 mb-4">
            Sprunkr
          </Link>
          <p className="text-gray-600 mb-8 max-w-md">
            An innovative music creation platform that makes it easy for everyone to create their own music.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            2025 Sprunkr - Making Music Creation Easier
          </div>
        </div>
      </div>
    </footer>
  )
}
