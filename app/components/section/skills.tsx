'use client'
import { SectionTitle } from '@/components/title'
import { DevIcons } from '@/components/icon'
import { ItemContainerAnimation, ItemAnimation } from '@/components/animation'
import { SkillsType } from '@/types'

export const Skills = () => {
  const category: SkillsType[] = ['Front End', 'Back End', 'Dev Tools']

  return (
    <section className="mt-32 md:mt-52" id="skills">
      <SectionTitle title="MY SKILLS" />

      <ItemContainerAnimation className="flex flex-col md:flex-row gap-12 mt-11 md:mt-14">
        {category.map((type) => (
          <ItemAnimation
            key={type}
            className="flex flex-col w-full md:w-[calc(100%/3)] items-start flex-auto"
          >
            <h3 className="font-bold text-xl text-purple-200 dark:text-purple-50">
              {type}
            </h3>
            <DevIcons type={type} />
          </ItemAnimation>
        ))}
      </ItemContainerAnimation>
    </section>
  )
}
