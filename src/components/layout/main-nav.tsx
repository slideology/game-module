'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Gamepad2, Search, Menu, X } from 'lucide-react'

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-pink-500" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">游戏门户</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400"
            >
              首页
            </Link>
            <Link 
              href="/category/trending" 
              className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400"
            >
              热门游戏
            </Link>
            <Link 
              href="/category/new" 
              className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400"
            >
              最新游戏
            </Link>
            <button className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400"
                onClick={() => setIsOpen(false)}
              >
                首页
              </Link>
              <Link
                href="/category/trending"
                className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400"
                onClick={() => setIsOpen(false)}
              >
                热门游戏
              </Link>
              <Link
                href="/category/new"
                className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400"
                onClick={() => setIsOpen(false)}
              >
                最新游戏
              </Link>
              <button 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400"
                onClick={() => setIsOpen(false)}
              >
                <Search className="h-5 w-5 mr-2" />
                搜索
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
