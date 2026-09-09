import { useEffect, useState } from 'react'

interface NumberStatsProps {
  totalDownloads: number
  subtext?: string
  animationDuration?: number
  decimals?: number
}

export const NumberStats = ({
  totalDownloads,
  subtext = '',
  animationDuration = 1500,
  decimals = 0,
}: NumberStatsProps) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min(
        (timestamp - startTime) / animationDuration,
        1
      )

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)

      setValue(totalDownloads * eased)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [totalDownloads, animationDuration])

  return (

<div className="flex flex-row items-end text-yellow-500 leading-none">
  <div className="text-7xl font-bold">
    {value.toFixed(decimals)}
  </div>

  <div className="text-5xl font-semibold mb-1 ml-1">
    {subtext}
  </div>
</div>


  )
}
