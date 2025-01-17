import { SocialVideo } from '@/lib/types'
import { VideoCard } from '@/components/ui/video-card'
import { getSocialVideos } from '@/lib/social'

export async function SocialFeed({ gameId }: { gameId: string }) {
  const videos = await getSocialVideos(gameId)
  
  if (!videos.length) return null

  return (
    <section id="social" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trending Videos
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Latest videos from your favorite content creators
        </p>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  )
}
