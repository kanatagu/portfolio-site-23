import Image from 'next/image'

type DevIconsType = {
  type: 'frontEnd' | 'backEnd' | 'tool'
}

export const DevIcons = ({ type }: DevIconsType) => {
  const frontEnd = [
    {
      image: 'typescript.svg',
      text: 'TypeScript'
    },
    {
      image: 'javascript.svg',
      text: 'JavaScript'
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
      image: 'html5.svg',
      text: 'HTML5'
    },
    {
      image: 'css3.svg',
      text: 'CSS3'
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
          className="group relative z-10 bg-gray-50 rounded-3xl px-2 py-2 cursor-pointer w-20 h-20 md:py-3 md:w-24 md:h-24 overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-[160%] before:bg-gray-100 dark:before:bg-purple-50 before:w-[140%] before:h-full before:skew-x-[-25d] hover:before:animate-skew ease-out"
        >
          <div className="relative z-20 flex flex-col items-center justify-between h-full">
            <Image
              src={`/images/skills/${item.image}`}
              alt={item.text}
              width="80"
              height="80"
              className="h-10 w-10 md:w-12 md:h-12"
            />
            <span className="block text-purple-500 text-xs md:text-md group-hover:font-semibold dark:group-hover:text-gray-50">
              {item.text}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
