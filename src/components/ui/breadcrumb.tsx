import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.href}>
            <div className="flex items-center">
              {index > 0 && (
                <ChevronRightIcon
                  className="h-4 w-4 text-gray-400 mx-1"
                  aria-hidden="true"
                />
              )}
              <Link
                href={item.href}
                className={`text-sm font-medium ${
                  index === items.length - 1
                    ? 'text-gray-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
