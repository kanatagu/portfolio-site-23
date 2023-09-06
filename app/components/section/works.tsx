'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/title'
import { WorkCard } from '@/components/card'
import { works } from '@/data'

export const Works = () => {
  const t = useTranslations('Index')

  const containerAnimation = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  }

  return (
    <section className="mt-32 md:mt-60" id="work">
      <SectionTitle title="WORK" />
      <p className="mt-10 whitespace-pre-line md:text-xl md:text-center md:mt-14">
        {t('work')}
      </p>
      <motion.div
        className="mt-10 flex flex-col flex-wrap gap-4 items-center md:flex-row md:mt-14 md:gap-7"
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {works.map((work) => (
          <WorkCard work={work} key={work.id} />
        ))}
      </motion.div>
    </section>
  )
}
