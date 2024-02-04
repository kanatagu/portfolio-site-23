import Image from 'next/image'

import {
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiSass,
  SiChakraui,
  SiTailwindcss,
  SiReactquery,
  SiApollographql,
  SiJest,
  SiAstro,
  SiNodedotjs,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGithub,
  SiDocker,
  SiFigma,
  SiAdobexd,
  SiSwagger,
  SiPostman,
  SiFirebase
} from 'react-icons/si'
import { SkillsType } from '@/types'

export type DevIconsType = {
  type: SkillsType
}

export const DevIcons = ({ type }: DevIconsType) => {
  const frontEnd = [
    {
      icon: <SiTypescript size="100%" />,
      text: 'TypeScript',
      url: 'https://www.typescriptlang.org/'
    },
    {
      icon: <SiJavascript size="100%" />,
      text: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      icon: <SiReact size="100%" />,
      text: 'React',
      url: 'https://react.dev/'
    },
    {
      icon: <SiNextdotjs size="100%" />,
      text: 'Next.js',
      url: 'https://nextjs.org/'
    },
    {
      icon: <SiRedux size="100%" />,
      text: 'Redux',
      url: 'https://redux.js.org/'
    },
    {
      icon: <SiReactquery size="100%" />,
      text: 'React Query',
      url: 'https://tanstack.com/query/latest'
    },
    {
      icon: <SiApollographql size="100%" />,
      text: 'Apollo Client',
      url: 'https://www.apollographql.com/docs/react/'
    },
    {
      icon: <SiJest size="100%" />,
      text: 'Jest',
      url: 'https://jestjs.io/'
    },
    {
      icon: <SiAstro size="100%" />,
      text: 'Astro',
      url: 'https://astro.build/'
    },
    {
      icon: <SiHtml5 size="100%" />,
      text: 'HTML5',
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
    },
    {
      icon: <SiCss3 size="100%" />,
      text: 'CSS3',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      icon: <SiSass size="100%" />,
      text: 'Sass',
      url: 'https://sass-lang.com/'
    },
    {
      icon: <SiChakraui size="100%" />,
      text: 'Chakra UI',
      url: 'https://chakra-ui.com/'
    },
    {
      icon: <SiTailwindcss size="100%" />,
      text: 'Tailwind CSS',
      url: 'https://tailwindcss.com/'
    }
  ]

  const backEnd = [
    {
      icon: <SiNodedotjs size="100%" />,
      text: 'Node.js',
      url: 'https://nodejs.org/en'
    },
    {
      icon: <SiExpress size="100%" />,
      text: 'Express.js',
      url: 'https://expressjs.com/'
    },
    {
      icon: <SiNestjs size="100%" />,
      text: 'Nest.js',
      url: 'https://nestjs.com/'
    },
    {
      icon: <SiGraphql size="100%" />,
      text: 'GraphQL',
      url: 'https://graphql.org/'
    },
    {
      icon: <SiPostgresql size="100%" />,
      text: 'PostgreSQL',
      url: 'https://www.postgresql.org/'
    },
    {
      icon: <SiMongodb size="100%" />,
      text: 'MongoDB',
      url: 'https://www.mongodb.com/'
    },
    {
      icon: <SiFirebase size="100%" />,
      text: 'Firebase',
      url: 'https://firebase.google.com/'
    },
    {
      icon: <SiPrisma size="100%" />,
      text: 'Prisma',
      url: 'https://www.prisma.io/'
    }
  ]

  const devTools = [
    {
      icon: <SiGithub size="100%" />,
      text: 'Github',
      url: 'https://github.com/'
    },
    {
      icon: <SiDocker size="100%" />,
      text: 'Docker',
      url: 'https://www.docker.com/'
    },
    {
      icon: <SiSwagger size="100%" />,
      text: 'Swagger',
      url: 'https://swagger.io/'
    },
    {
      icon: <SiPostman size="100%" />,
      text: 'Postman',
      url: 'https://www.postman.com/'
    },
    {
      icon: <SiFigma size="100%" />,
      text: 'Figma',
      url: 'https://www.figma.com/'
    },
    {
      icon: <SiAdobexd size="100%" />,
      text: 'XD',
      url: 'https://helpx.adobe.com/'
    }
  ]

  const renderArray = (type: string) => {
    switch (type) {
      case 'Front End':
        return frontEnd
      case 'Back End':
        return backEnd
      case 'Dev Tools':
        return devTools
      default:
        return []
    }
  }

  return (
    <div className="flex mt-1 bg-gray-50 dark:bg-gray-200 py-6 px-6 rounded flex-auto w-full">
      <ul className="flex gap-4 flex-wrap content-start">
        {renderArray(type).map((item) => (
          <li key={item.text} className="group w-10 h-10 hover:animate-wiggle">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 dark:text-purple-500 group-hover:text-purple-50 dark:group-hover:text-purple-200"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
