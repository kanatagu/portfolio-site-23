'use client'
import { Link } from 'react-scroll'
import { useTranslations } from 'next-intl'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'

export const Hero = () => {
  const t = useTranslations('Index')

  return (
    <section className="relative pt-16 md:pt-36" id="home">
      <h1 className="text-5xl font-bold tracking-wide md:text-7xl">
        Hi, I&apos;m
        <span className="text-purple-100 block md:inline md:pl-2">
          Kana Taguchi
          <span className="text-black dark:text-gray-50">.</span>
        </span>
      </h1>

      <p className="text-2xl font-semibold pt-10 tracking-wide md:text-4xl dark:text-gray-100">
        {t('homeSubtitle')}
      </p>
      <p className="text-lg pt-6 tracking-wide md:text-2xl dark:text-gray-100">
        {t('homeDescription')}
      </p>

      <div className="pt-12">
        <Link
          className="inline-block btn-square"
          to="work"
          spy={true}
          smooth={true}
          offset={-120}
          duration={650}
        >
          VIEW MY WORKS
        </Link>
      </div>
      <div className="absolute bottom-2 right-0 md:right-10">
        <div className="animate-bounce text-3xl text-purple-50">
          <HiOutlineChevronDoubleDown />
        </div>
      </div>
    </section>
  )
}
