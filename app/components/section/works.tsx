'use client'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/title'
import { WorkCard } from '@/components/card'
import { works } from '@/data'

export const Works = () => {
  const t = useTranslations('Index')

  return (
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
  )
}
