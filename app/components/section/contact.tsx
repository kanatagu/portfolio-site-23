'use client'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/title'
import { RevealAnimation } from '@/components/animation'

export const Contact = () => {
  const t = useTranslations('Index')

  return (
    <section className="mt-32 md:mt-52" id="contact">
      <SectionTitle title="CONTACT" />
      <RevealAnimation>
        <p className="mt-10 whitespace-pre-line md:text-xl md:text-center md:mt-14 dark:text-gray-100">
          {t('contact')}
        </p>
        <div className="text-center mt-12">
          <a href="mailto:kanataguchi23@gmail.com" className="inline-block btn">
            GET IN TOUCH
          </a>
        </div>
      </RevealAnimation>
    </section>
  )
}
