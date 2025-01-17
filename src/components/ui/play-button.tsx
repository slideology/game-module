import { PlayIcon } from '@heroicons/react/24/solid'

export function PlayButton({ gameUrl }: { gameUrl: string }) {
  return (
    <a
      href={gameUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-flex items-center gap-x-2"
    >
      <PlayIcon className="h-6 w-6" aria-hidden="true" />
      Play Now
    </a>
  )
}
