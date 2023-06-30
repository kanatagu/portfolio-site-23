export type WorkType = {
  id: number
  title: string
  images: string[]
  overview: string
  tech: string[]
  website: string | null
  github: string | null
}

export const works: WorkType[] = [
  {
    id: 1,
    title: 'Learning Child App',
    images: ['work1-1.jpg', 'work1-2.jpg', 'work1-3.jpg', 'work1-4.jpg'],
    overview:
      'Learning subscription service for elementary school children. This service encourage children to improve their thinking skills. I joined as a front end-lead engineer and it took for one year to release from scratch.',
    tech: [
      'TypeScript',
      'React',
      'Next.js',
      'ChakraUI',
      'Redux Toolkit',
      'RTK Query',
      'AWS Cognito',
      'Stripe'
    ],
    website: 'https://kangaemax.com/login',
    github: null
  },
  {
    id: 2,
    title: 'Moving Matching App',
    images: ['work2-1.jpg', 'work2-2.jpg', 'work2-3.jpg'],
    overview:
      'Matching web service for people who live alone and moving companies with providing low fixed cost. There are many form for users to find potential companies to match. I joined as a front end developer.',
    tech: ['TypeScript', 'React', 'Sass', 'Axious', 'React Hook Form'],
    website: 'https://www.t-hikkoshi-navi.jp/',
    github: null
  },
  {
    id: 3,
    title: 'Portfolio site',
    images: ['work3-1.jpg', 'work3-2.jpg'],
    overview:
      'This static website has feature of dark theme mode and multi language mode. I designed and made it with Next.js',
    tech: ['TypeScript', 'Next.js', 'TailwindCSS'],
    // TODO Change URL
    website: 'https://kangaemax.com/login',
    github: null
  }
]
