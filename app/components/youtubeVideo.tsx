"use client"
import { useState } from "react"

interface YouTubeVideoProps {
  videoId: string
  title: string
  className?: string
}

/** Next.js serves `public/<path>` as `/<path>`. "public/..." in config was breaking local playback. */
function normalizeLocalPath(raw: string): string {
  let s = raw.trim()
  if (s.toLowerCase().startsWith("public/")) s = s.slice(7)
  if (!s.startsWith("/")) s = `/${s}`
  const parts = s.split("/").filter((p) => p.length > 0)
  return `/${parts.map(encodeURIComponent).join("/")}`
}

function isLocalFilePath(input: string): boolean {
  const s = input.trim().toLowerCase()
  if (s.startsWith("public/") || s.startsWith("/videos/") || s.startsWith("/")) {
    if (s.includes(".mp4") || s.includes(".webm") || s.includes(".ogg")) return true
  }
  return s.endsWith(".mp4") || s.endsWith(".webm") || s.endsWith(".ogg")
}

export default function YouTubeVideo({ videoId, title, className = "" }: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const isLocalVideo = isLocalFilePath(videoId)
  const localSrc = isLocalVideo ? normalizeLocalPath(videoId) : videoId

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 shadow-2xl shadow-fuchsia-500/20 ${className}`}>
      <div className="aspect-video bg-[#0F103F] relative">
        {!isPlaying ? (
          <>
            {/* Thumbnail/Preview */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/20 to-purple-900/20 flex items-center justify-center cursor-pointer group"
              onClick={handlePlay}
            >
              {/* Custom Play Button - Theme Color */}
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-fuchsia-500/50 group-hover:scale-110 transition-transform duration-300">
                  <svg 
                    className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                {/* Pulse animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
            {/* Source label */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/60 text-sm">
              <span>{isLocalVideo ? "Local Video" : "YouTube"}</span>
            </div>
          </>
        ) : (
          <>
            {isLocalVideo ? (
              <video
                className="h-full w-full"
                controls
                autoPlay
                playsInline
                preload="metadata"
                // important: not muted so audio plays after user click (autoplay policy)
                muted={false}
              >
                <source
                  src={localSrc}
                  type={localSrc.toLowerCase().includes(".webm") ? "video/webm" : "video/mp4"}
                />
                Your browser does not support this video.
              </video>
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&color=white`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </>
        )}
      </div>
    </div>
  )
}
