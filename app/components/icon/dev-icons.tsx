import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSass,
  SiChakraui,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFirebase,
  SiMongodb,
  SiPrisma,
  SiGithub,
  SiDocker,
  SiFigma,
  SiAdobexd
} from 'react-icons/si'

type DevIconsType = {
  type: 'frontEnd' | 'backEnd' | 'tool'
}

export const DevIcons = ({ type }: DevIconsType) => {
  const frontEnd = [
    {
      icon: <SiHtml5 className="text-[2.5rem] md:text-7xl" />,
      text: 'HTML5'
    },
    {
      icon: <SiCss3 className="text-[2.5rem] md:text-7xl" />,
      text: 'CSS3'
    },
    {
      icon: <SiJavascript className="text-[2.5rem] md:text-7xl" />,
      text: 'JavaScript'
    },
    {
      icon: <SiTypescript className="text-[2.5rem] md:text-7xl" />,
      text: 'TypeScript'
    },
    {
      icon: <SiReact className="text-[2.5rem] md:text-7xl" />,
      text: 'React'
    },
    {
      icon: <SiNextdotjs className="text-[2.5rem] md:text-7xl" />,
      text: 'Next.js'
    },
    {
      icon: <SiSass className="text-[2.5rem] md:text-7xl" />,
      text: 'Sass'
    },
    {
      icon: <SiChakraui className="text-[2.5rem] md:text-7xl" />,
      text: 'ChakraUI'
    },
    {
      icon: <SiTailwindcss className="text-[2.5rem] md:text-7xl" />,
      text: 'Tailwind Css'
    }
  ]

  const backEnd = [
    {
      icon: <SiNodedotjs className="text-[2.5rem] md:text-7xl" />,
      text: 'Node.js'
    },
    {
      icon: <SiExpress className="text-[2.5rem] md:text-7xl" />,
      text: 'Express.js'
    },
    {
      icon: <SiNestjs className="text-[2.5rem] md:text-7xl" />,
      text: 'Nest.js'
    },
    {
      icon: <SiFirebase className="text-[2.5rem] md:text-7xl" />,
      text: 'Firebase'
    },
    {
      icon: <SiMongodb className="text-[2.5rem] md:text-7xl" />,
      text: 'MongoDB'
    },
    {
      icon: <SiPrisma className="text-[2.5rem] md:text-7xl" />,
      text: 'Prisma'
    }
  ]

  const tool = [
    {
      icon: <SiGithub className="text-[2.5rem] md:text-7xl" />,
      text: 'Github'
    },
    {
      icon: <SiDocker className="text-[2.5rem] md:text-7xl" />,
      text: 'Docker'
    },
    {
      icon: <SiFigma className="text-[2.5rem] md:text-7xl" />,
      text: 'Figma'
    },
    {
      icon: <SiAdobexd className="text-[2.5rem] md:text-7xl" />,
      text: 'XD'
    }
  ]

  const renderArray = (type: string) => {
    switch (type) {
      case 'frontEnd':
        return frontEnd
      case 'backEnd':
        return backEnd
      case 'tool':
        return tool
      default:
        return []
    }
  }

  return (
    <ul className="flex gap-8 flex-wrap mt-4 max-w-[304px] md:max-w-none md:mt-5">
      {renderArray(type).map((item) => (
        <li
          key={item.text}
          className="text-black dark:text-gray-100 flex flex-col items-center w-20 md:w-28"
        >
          {item.icon}
          <span className="text-xs pt-2 md:text-lg">{item.text}</span>
        </li>
      ))}
    </ul>
  )
}
