import { type FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

type T_NavButtonProps = {
  text: string
  to: string
}

export const NavButton: FC<T_NavButtonProps> = (props: T_NavButtonProps): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = location.pathname === props.to

  const handleClick = () => {
    navigate(props.to)
  }

  return (
    <button
      className={`text-lg p-4 w-24 text-white hover:text-yellow-500 transition-colors ease-in-out  ${
        isActive ? 'font-bold' : 'font-normal'
      }`}
      onClick={handleClick}
    >
      {props.text}
    </button>
  )
}

type T_ExtButtonProps = {
  text: string
  to: string
}

export const ExtButton: FC<T_ExtButtonProps> = ({ text, to }): JSX.Element => {

  const formattedUrl = to.startsWith('http://') || to.startsWith('https://') ? to : `https://${to}`

  return (
    <a
      href={formattedUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg p-4 w-24 text-white hover:text-yellow-500 transition-colors ease-in-out font-normal"
    >
      {text}
    </a>
  )
}

