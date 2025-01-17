import { Game } from '@/lib/types'

export function GameAbout({ game }: { game: Game }) {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About {game.title}
          </h2>
          <div className="mt-6 text-xl leading-8 text-gray-700">
            <p>{game.longDescription || game.description}</p>
          </div>
          
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Categories
              </dt>
              <dd className="mt-1 flex flex-wrap gap-2">
                {game.categories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >
                    {category}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Tags
              </dt>
              <dd className="mt-1 flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                  >
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
