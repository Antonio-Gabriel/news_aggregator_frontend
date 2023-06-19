import { ButtonHTMLAttributes } from 'react'

import './styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  variant: 'primary' | 'secondary' | 'secondary-with-border' | 'logout'
  isAction: boolean
}

export function Button({
  children,
  variant,
  isAction = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`btn btn-${variant} ${isAction ? 'active' : ''}`}
    >
      {children}
    </button>
  )
}
