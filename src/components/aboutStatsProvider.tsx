import { type FC, useState, useEffect } from 'react'

type T_AboutStatsProviderProps = {
  downloads: JSX.Element
  yearsOfDevelopment: JSX.Element
  contributors: JSX.Element
  hours: JSX.Element
}

export const AboutStatsProvider: FC<T_AboutStatsProviderProps> = (props: T_AboutStatsProviderProps): JSX.Element => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth)
  const [pageHeight, setPageHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth)
      setPageHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const flexClassName = pageWidth < 800 ? 'flex-col' : 'flex-row'
  const widthParam = pageWidth < 800 ? 'w-auto' : 'w-5/6'
  return (
    <div className={`flex flex-row items-center justify-evenly w-full`}>
      <div
        className={`flex ${flexClassName} items-center justify-evenly p-10 bg-black/70 border-2 rounded-3xl border-yellow-500/20 h-full ${widthParam}`}
      >
        <div className="flex flex-col items-center w-1/6">
          {props.downloads}
          <div className="text-center text-slate-300">Total Downloads</div>
        </div>
        <div className="flex flex-col items-center w-1/6">
          {props.yearsOfDevelopment}
          <div className="text-center text-slate-300">Years of Development</div>
        </div>
        <div className="flex flex-col items-center w-1/6">
          {props.contributors}
          <div className="text-center text-slate-300">Contributors</div>
        </div>
        <div className="flex flex-col items-center w-1/6">
          {props.hours}
          <div className="text-center text-slate-300">Hours of Development</div>
        </div>
      </div>
    </div>
  )
}
