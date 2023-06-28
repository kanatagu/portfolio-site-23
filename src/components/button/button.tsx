import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  square?: boolean
}
export const Button = ({ children, square = false }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`font-semibold shadow-md bg-gradient-to-b from-purple-200 to-purple-300 text-xl px-10 tracking-wide py-3 transition duration-300 hover:scale-110 ${
        square
          ? 'rounded-lg md:text-xl'
          : 'py-3 rounded-3xl md:text-2xl md:py-4 px-14'
      }`}
    >
      {children}
    </button>
  )
}
