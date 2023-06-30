import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  square?: boolean
  onClick?: () => void
}
export const Button = ({ children, square = false, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${square ? 'btn-square' : 'btn'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
