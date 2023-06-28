import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md'

export const ThemeButton = () => {
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
      className="text-4xl hover:text-purple-100"
    >
      {theme === 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  )
}
