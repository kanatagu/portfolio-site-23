'use client'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { useTranslations } from 'next-intl'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import { RevealAnimation } from '@/components/animation'

export const Hero = () => {
  const t = useTranslations('Index')

  return (
    <section className="relative pt-16 md:pt-20" id="home">
      <div className="flex items-center gap-6 justify-around lg:h-[538px]">
        <RevealAnimation>
          <div>
            <span className="text-lg font-bold tracking-wide md:text-3xl">
              Hello,
            </span>
            <h1 className="text-3xl font-bold tracking-wide md:pt-2 md:text-6xl">
              I&apos;m
              <span className="text-purple-100 text-4xl pl-2 md:inline md:pl-2 md:text-6xl">
                Kana Taguchi
              </span>
            </h1>
            <p className="text-xl font-semibold pt-10 tracking-wide md:text-3xl dark:text-gray-100">
              {t('homeSubtitle')}
            </p>
            <p className="text-lg pt-4 tracking-wide md:text-xl dark:text-gray-100">
              {t('homeDescription')}
            </p>
            <div className="pt-10 md:pt-16">
              <Link
                className="inline-block btn-square"
                to="projects"
                spy={true}
                smooth={true}
                offset={-120}
                duration={650}
              >
                VIEW MY PROJECTS
              </Link>
            </div>
          </div>
        </RevealAnimation>
        <div className="hidden md:block w-[380px]">
          <div className="p-5 rounded-[200px] border border-gray-200 dark:border-purple-500 mx-auto">
            <Image
              src="/images/hero-me.webp"
              alt="my picture"
              width="798"
              height="1081"
              priority
              className="rounded-full w-full h-auto border-4 border-purple-50 shadow-lg shadow-purple-50"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 right-0 md:right-10">
        <div className="animate-bounce text-3xl text-purple-50">
          <HiOutlineChevronDoubleDown />
        </div>
      </div>
    </section>
  )
}
