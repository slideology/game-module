import { SocialVideo } from '@/lib/types'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'

export function VideoCard({ video }: { video: SocialVideo }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-indigo-600">
          {video.title}
        </h3>
        <div className="mt-1 flex items-center gap-x-2 text-sm text-gray-500">
          <p>{video.creator}</p>
          <span>•</span>
          <p>{formatDistanceToNow(new Date(video.createdAt))} ago</p>
          <span>•</span>
          <p>{video.views.toLocaleString()} views</p>
        </div>
      </div>
    </a>
  )
}
