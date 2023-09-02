'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { Label } from '@/components/label'
import { SectionTitle } from '@/components/title'

export const About = () => {
  const t = useTranslations('Index')

  return (
    <section className="mt-32 md:mt-60" id="about">
      <SectionTitle title="ABOUT ME" />
      <div className="flex flex-col items-center mt-11 text-center justify-items-center md:flex-row md:justify-between md:text-left md:mt-14 flex-wrap">
        <div className="md:w-[42%]">
          <Image
            src="/images/about-me.jpg"
            alt="face picture"
            width="600"
            height="600"
            className="rounded-full md:w-4/5 mx-auto h-auto"
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
  )
}
