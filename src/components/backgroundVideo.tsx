import React, { ReactNode, useRef, type FC, useEffect } from 'react'

type T_BackgroundVideoProps = {
  videoSource: string
  children: ReactNode
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>
  playbackSpeed: number
}

const BackgroundVideo: FC<T_BackgroundVideoProps> = (props: T_BackgroundVideoProps) => {
  const { playbackSpeed, setScrollPosition, videoSource, children } = props
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed
    }
  }, [playbackSpeed])

  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const currentPosition = divRef.current.scrollTop
        setScrollPosition(currentPosition)
      }
    }
    const divElement = divRef.current
    if (divElement) {
      divElement.addEventListener('scroll', handleScroll)

      return () => {
        divElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [setScrollPosition])

  return (
    <div className="relative w-screen h-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full  bg-black/60"></div>
      <div className="relative h-screen  z-10 overflow-auto overflow-x-hidden w-screen" ref={divRef}>
        {children}
      </div>
    </div>
  )
}

export default BackgroundVideo
