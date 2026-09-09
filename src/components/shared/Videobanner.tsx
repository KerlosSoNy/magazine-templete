'use client'
import React, { useEffect, useRef } from 'react'

export default function Videobanner({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        video.muted = true

        const tryPlay = () => {
            video.play().catch(() => {
                setTimeout(tryPlay, 100)
            })
        }

        tryPlay()
        const handlePause = () => tryPlay()
        const handleStalled = () => tryPlay()
        const handleVisibility = () => {
            if (document.visibilityState === 'visible') tryPlay()
        }

        video.addEventListener('pause', handlePause)
        video.addEventListener('stalled', handleStalled)
        video.addEventListener('suspend', handleStalled)
        document.addEventListener('visibilitychange', handleVisibility)

        return () => {
            video.removeEventListener('pause', handlePause)
            video.removeEventListener('stalled', handleStalled)
            video.removeEventListener('suspend', handleStalled)
            document.removeEventListener('visibilitychange', handleVisibility)
        }
    }, [])

    return (
        <video
            ref={videoRef}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className="w-full h-full absolute top-0 object-cover"
        />
    )
}