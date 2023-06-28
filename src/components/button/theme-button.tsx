import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md'

type ThemeButton = {
  dropdownMenu?: boolean
}

export const ThemeButton = ({ dropdownMenu = false }: ThemeButton) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
