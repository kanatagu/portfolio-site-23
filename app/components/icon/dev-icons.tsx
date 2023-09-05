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
import Image from 'next/image'

type DevIconsType = {
  type: 'frontEnd' | 'backEnd' | 'tool'
}

export const DevIcons = ({ type }: DevIconsType) => {
  const frontEnd = [
    {
      image: 'html5.svg',
      text: 'HTML5'
    },
    {
      image: 'css3.svg',
      text: 'CSS3'
    },
    {
      image: 'javascript.svg',
      text: 'JavaScript'
    },
    {
      image: 'typescript.svg',
      text: 'TypeScript'
    },
    {
      image: 'react.svg',
      text: 'React'
    },
    {
      image: 'nextjs.svg',
      text: 'Next.js'
    },
    {
      image: 'sass.svg',
      text: 'Sass'
    },
    {
      image: 'chakraui.svg',
      text: 'Chakra UI'
    },
    {
      image: 'tailwindcss.svg',
      text: 'Tailwind Css'
    }
  ]

  const backEnd = [
    {
      image: 'nodejs.svg',
      text: 'Node.js'
    },
    {
      image: 'express.svg',
      text: 'Express.js'
    },
    {
      image: 'nestjs.svg',
      text: 'Nest.js'
    },
    {
      image: 'firebase.svg',
      text: 'Firebase'
    },
    {
      image: 'mongodb.svg',
      text: 'MongoDB'
    },
    {
      image: 'prisma.svg',
      text: 'Prisma'
    }
  ]

  const tool = [
    {
      image: 'github.svg',
      text: 'Github'
    },
    {
      image: 'docker.svg',
      text: 'Docker'
    },
    {
      image: 'figma.svg',
      text: 'Figma'
    },
    {
      image: 'xd.svg',
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
          className="group relative z-10 bg-gray-50 rounded-3xl p-2 cursor-pointer w-20 h-20 md:w-24 md:h-24 overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-[160%] before:bg-gray-100 dark:before:bg-purple-50 before:w-[140%] before:h-full before:skew-x-[-25d] hover:before:animate-skew ease-out"
        >
          <div className="relative z-20 flex flex-col items-center justify-center">
            <Image
              src={`/images/skills/${item.image}`}
              alt={item.text}
              width="80"
              height="80"
              className="h-10 w-10 md:w-12 md:h-12"
            />
            <span className="text-purple-500 text-xs pt-2 md:text-md group-hover:font-semibold dark:group-hover:text-gray-50">
              {item.text}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
