'use client'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/title'
import { ProjectCard } from '@/components/card'
import { ItemContainerAnimation } from '@/components/animation'
import { projects } from '@/data'

export const Projects = () => {
  const t = useTranslations('Index')

  return (
    <section className="mt-32 md:mt-52" id="projects">
      <SectionTitle title="PROJECTS" />
      <p className="mt-10 whitespace-pre-line md:text-xl md:text-center md:mt-14 dark:text-gray-100">
        {t('projects')}
      </p>
      <ItemContainerAnimation className="mt-10 flex flex-col flex-wrap gap-4 items-center justify-center md:flex-row md:mt-14 md:gap-7">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ItemContainerAnimation>
    </section>
  )
}
