'use client'
import { useTheme } from 'next-themes'
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md'

type ThemeButton = {
  dropdownMenu?: boolean
}

export const ThemeButton = ({ dropdownMenu = false }: ThemeButton) => {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`text-4xl hover:${
        dropdownMenu ? 'opacity-60' : 'text-purple-100'
      }`}
    >
      {theme === 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  )
}
