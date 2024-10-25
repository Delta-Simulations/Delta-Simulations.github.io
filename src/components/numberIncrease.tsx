import { useState, useEffect, type FC } from 'react'

type T_NumberStatsProps = {
  totalDownloads: number
  animationDuration: number
  subtext: string
}

export const NumberStats: FC<T_NumberStatsProps> = (props: T_NumberStatsProps) => {
  const { totalDownloads, animationDuration } = props
  const [downloads, setDownloads] = useState(0)
  const intervalTime = animationDuration / totalDownloads

  useEffect(() => {
    const interval = setInterval(() => {
      const increment = totalDownloads / 100
      if (downloads + increment < totalDownloads) {
        setDownloads(downloads + increment)
      } else {
        setDownloads(totalDownloads)
        clearInterval(interval)
      }
    }, animationDuration)
    return () => clearInterval(interval)
  }, [downloads, totalDownloads, intervalTime, animationDuration])

  return (
    <div className="flex fex-row items-end text-yellow-500">
      <div className="text-7xl">{Math.round(downloads)}</div>
      <div className="text-5xl">{props.subtext}</div>
    </div>
  )
}
