'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from 'react-scroll'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import { Header, Footer } from '@/components/navigation'
import { SectionTitle } from '@/components/title'
import { Label } from '@/components/label'
import { DevIcons } from '@/components/icon'
import { WorkCard } from '@/components/card'
import { RevealAnimation } from '@/components/animation'
import { works } from '@/data'

export default function Home() {
  const t = useTranslations('Index')

  return (
    <div className="font-main text-black bg-beige-50 dark:bg-black dark:text-gray-50 min-h-screen">
      <Header />
      <main className="pt-20 px-4 max-w-container mx-auto">
        {/* HERO */}
        <RevealAnimation>
          <section className="relative pt-16 md:pt-36" id="home">
            <RevealAnimation>
              <h1 className="text-5xl font-bold tracking-wide md:text-7xl">
                Hi, I&apos;m
                <span className="text-purple-100 block md:inline md:pl-2">
                  Kana Taguchi
                  <span className="text-black dark:text-gray-50">.</span>
                </span>
              </h1>
            </RevealAnimation>

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
        </RevealAnimation>

        {/* ABOUT */}
        <section className="mt-32 md:mt-60" id="about">
          <SectionTitle title="ABOUT ME" />
          <div className="flex flex-col items-center mt-11 text-center justify-items-center md:flex-row md:justify-between md:text-left md:mt-14 flex-wrap">
            <div className="md:w-[42%]">
              <Image
                src="/images/me.jpg"
                alt="face picture"
                width="600"
                height="600"
                className="rounded-full w-full h-auto"
              />
              <div className="flex justify-center gap-20 text-2xl font-bold mt-8 md:text-4xl md:mt-14">
                <a
                  href={'https://www.linkedin.com/in/kana-taguchi-49a510271/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  <SiLinkedin />
                </a>
                <a
                  href={'https://github.com/Kana-TAGUCHI'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  <SiGithub />
                </a>
              </div>
            </div>
            <div className="mt-16 md:w-[47%] md:mt-0">
              <div>
                <h3 className="font-bold text-2xl">Story</h3>
                <div
                  className="flex flex-col gap-4 dark:text-gray-100 mt-4 text-left md:text-lg md:mt-8 [&_span]:text-purple-200 [&_span]:dark:text-purple-50"
                  dangerouslySetInnerHTML={{ __html: t.raw('about') }}
                ></div>
              </div>
              <div className="mt-16 md:mt-12">
                <h3 className="font-bold text-2xl">Things I like</h3>
                <div className="flex flex-wrap mt-4 gap-4 justify-center md:mt-8 md:gap-10 md:justify-start">
                  <Label text="WorkOut" />
                  <Label text="Learning" />
                  <Label text="Hiking" />
                  <Label text="Volleyball" />
                  <Label text="Movie" />
                  <Label text="Cooking" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="mt-32 md:mt-60" id="work">
          <SectionTitle title="WORK" />
          <p className="mt-10 whitespace-pre-line md:text-xl md:text-center md:mt-14">
            {t('work')}
          </p>
          <div className="mt-10 flex flex-col flex-wrap gap-4 items-center md:flex-row md:mt-14 md:gap-7">
            {works.map((work) => (
              <WorkCard work={work} key={work.id} />
            ))}
          </div>
        </section>

        {/* MY SKILLS */}
        <section className="mt-32 md:mt-60" id="skills">
          <SectionTitle title="MY SKILLS" />
          <div className="flex flex-col gap-11 items-center mt-11 text-center md:items-start md:text-left md:gap-16 md:mt-14">
            <div>
              <h3 className="font-bold text-xl text-purple-400 dark:text-purple-50">
                Front End
              </h3>
              <DevIcons type="frontEnd" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-purple-400 dark:text-purple-50">
                Back End
              </h3>
              <DevIcons type="backEnd" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-purple-400 dark:text-purple-50">
                Tools
              </h3>
              <DevIcons type="tool" />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="pt-32 md:pt-60" id="contact">
          <SectionTitle title="CONTACT" />
          <p className="mt-10 whitespace-pre-line md:text-xl md:text-center md:mt-14">
            {t('contact')}
          </p>
          <div className="text-center mt-12">
            <a href="mailto:kana.vc2341@gmail.com" className="inline-block btn">
              GET IN TOUCH
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
