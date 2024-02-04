'use client'
import { useState } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import Link from 'next-intl/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { BsTranslate } from 'react-icons/bs'
import { Link as ScrollLink } from 'react-scroll'
import { ThemeButton } from '../button'
import { useTheme } from 'next-themes'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangSettingOpen, setIsLangSettingOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <header className="fixed z-30 h-20 w-full text-gray-50 bg-purple-50 dark:bg-purple-500 top-0">
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
          className={`flex justify-center absolute top-20 transition-all duration-500 h-screen w-full bg-purple-50 dark:bg-purple-500 md:static md:h-full md:justify-end md:items-center md:bg-transparent md:dark:bg-transparent ${
            isMenuOpen ? 'right-0' : '-right-full'
          }`}
        >
          <ul className="flex flex-col gap-12 text-xl font-medium items-center pt-10 md:flex-row  md:justify-end md:pt-0 md:text-lg md:leading-none">
            <li>
              <ScrollLink
                className="cursor-pointer hover:text-purple-200"
                to="home"
                spy={true}
                smooth={true}
                offset={-120}
                duration={650}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="cursor-pointer hover:text-purple-200"
                to="about"
                spy={true}
                smooth={true}
                offset={-120}
                duration={650}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="cursor-pointer hover:text-purple-200"
                to="projects"
                spy={true}
                smooth={true}
                offset={-120}
                duration={650}
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="cursor-pointer hover:text-purple-200"
                to="skills"
                spy={true}
                smooth={true}
                offset={-120}
                duration={650}
                onClick={() => setIsMenuOpen(false)}
              >
                SKILLS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="cursor-pointer hover:text-purple-200"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={650}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </ScrollLink>
            </li>
            <li>
              <ThemeButton />
            </li>
            <li className="hidden md:block relative">
              <button
                className="hover:text-purple-200"
                onClick={() => setIsLangSettingOpen(!isLangSettingOpen)}
              >
                <BsTranslate size="32" />
              </button>
              {isLangSettingOpen && (
                <div className="flex justify-center absolute -right-14 -bottom-[132px] bg-purple-400 dark:bg-purple-50 p-4 rounded-lg shadow">
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/"
                      locale="en"
                      className="border-2 rounded-sm p-2 text-center hover:opacity-50"
                    >
                      English
                    </Link>
                    <Link
                      href="/"
                      locale="ja"
                      className="border-2 rounded-sm p-2 text-center hover:opacity-50"
                    >
                      Japanese
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li className="block md:hidden">
              <div className="flex flex-col justify-center items-center border-2 p-4 rounded-md">
                <BsTranslate size="32" />
                <div className="flex flex-col gap-4 pt-4">
                  <Link
                    href="/"
                    locale="en"
                    className="border-2 rounded-sm p-2 text-center hover:opacity-50"
                  >
                    English
                  </Link>
                  <Link
                    href="/"
                    locale="ja"
                    className="border-2 rounded-sm p-2 text-center hover:opacity-50"
                  >
                    Japanese
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
