'use client'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

type ProviderProps = {
  children: React.ReactNode
}

export const Providers = ({ children }: ProviderProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
