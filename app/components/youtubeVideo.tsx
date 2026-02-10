"use client"
import { useState } from "react"

interface YouTubeVideoProps {
  videoId: string
  title: string
  className?: string
}

export default function YouTubeVideo({ videoId, title, className = "" }: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

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
            {/* YouTube Logo/Text */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/60 text-sm">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </div>
          </>
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
      </div>
    </div>
  )
}
