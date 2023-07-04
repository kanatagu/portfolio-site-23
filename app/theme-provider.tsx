'use client'
import { useState, useEffect } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

type ProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>
}
