'use client'
import { useTheme } from 'next-themes'
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md'

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-4xl hover:text-purple-200"
    >
      {theme === 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  )
}
