import { useState } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { FiSettings, FiMenu, FiX } from 'react-icons/fi'
import { BsTranslate } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { ThemeButton } from '@/components/button'
import { useTheme } from 'next-themes'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSettingOpen, setIsSettingOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <header className="fixed z-10 h-20 w-full text-gray-50 bg-purple-50 dark:bg-purple-500 top-0">
      <div className="flex justify-between items-center max-w-container mx-auto w-full h-full px-4">
        <NextLink href="/">
          <Image
            src={`${
              theme === 'dark'
                ? '/images/logo-dark.png'
                : '/images/logo-light.png'
            }`}
            alt="K"
            width="48"
            height="48"
          />
        </NextLink>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <FiX size="34" /> : <FiMenu size="34" />}
        </button>

        <nav
          className={`flex justify-center bg-purple-50 dark:bg-purple-500 absolute top-20 transition-all duration-500 h-screen w-full  md:static md:h-full md:justify-end md:items-center ${
            isMenuOpen ? 'right-0' : '-right-full'
          }`}
        >
          <ul className="flex flex-col gap-14 text-xl font-medium items-center pt-10 md:flex-row  md:justify-end md:pt-0 md:text-lg md:leading-none">
            <li>
              <Link
                className="cursor-pointer hover:text-purple-100"
                to="home"
                spy={true}
                smooth={true}
                offset={-120}
                duration={650}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:text-purple-100"
                to="about"
                spy={true}
                smooth={true}
                offset={-120}
                duration={650}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:text-purple-100"
                to="skills"
                spy={true}
                smooth={true}
                offset={-120}
                duration={650}
                onClick={() => setIsMenuOpen(false)}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:text-purple-100"
                to="work"
                spy={true}
                smooth={true}
                offset={-120}
                duration={650}
                onClick={() => setIsMenuOpen(false)}
              >
                WORK
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:text-purple-100"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={650}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
            <li className="hidden md:block relative">
              <button
                className="hover:text-purple-100"
                onClick={() => setIsSettingOpen(!isSettingOpen)}
              >
                <FiSettings size="24" />
              </button>
              {isSettingOpen && (
                <div className="flex justify-center absolute -right-14 -bottom-20 bg-purple-400 dark:bg-purple-50 p-4 rounded-lg shadow h-16">
                  <div className="flex gap-8">
                    <ThemeButton dropdownMenu />
                    <button className="text-4xl hover:opacity-60">
                      <BsTranslate size="32" />
                    </button>
                  </div>
                </div>
              )}
            </li>
            <li className="block md:hidden">
              <div className="flex gap-10">
                <ThemeButton />
                <button className="text-4xl hover:text-purple-100">
                  <BsTranslate />
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
