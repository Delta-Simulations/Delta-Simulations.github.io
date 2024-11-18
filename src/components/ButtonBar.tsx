import { type FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './buttonBar.scss'

type T_ButtonBarProps = {
  buttons: JSX.Element[]
  logo: JSX.Element
  className: string
  fillBg: boolean
}

export const ButtonBar: FC<T_ButtonBarProps> = ({ buttons, logo, className, fillBg }) => {
  const navigate = useNavigate()

  const [scrollPosition, setScrollPosition] = useState(window.screenY)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.screenY)
      console.log(scrollPosition)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])

  const fillBgClass = fillBg ? 'bg-black/90 shadow-2xl shadow-yellow-500/10 ' : ''

  return (
    <div className={`flex sticky top-0 left-0 items-center justify-center button-bar ${fillBgClass} w-screen   h-1/6`}>
      <div className={`w-4/5  flex justify-between ${className}`}>
        <div
          className="flex items-center"
          onClick={() => {
            navigate('/')
          }}
        >
          {logo}
        </div>
        <div className="flex items-center w-1/5">{buttons}</div>
      </div>
    </div>
  )
}
