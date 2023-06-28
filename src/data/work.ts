export type WorkType = {
  id: number
  title: string
  images: string[]
  overview: string
  tech: string[]
  website: string | undefined
  github: string | undefined
}

export const works: WorkType[] = [
  {
    id: 1,
    title: 'Learning App',
    images: ['work1-1.png', 'work1-2.jpg', 'work1-3.jpg'],
    overview:
      'Learning App is for children. Learning App is for children Learning App is for children or children or childrenLearning App is for children. Learning App is for children Learning App is for children or children or childrenLearning App is for children. Learning App is for children Learning App is for children or children or childrenLearning App is for children. Learning App is for children Learning App is for children or children or childrenLearning App is for children. Learning App is for children Learning App is for children or children or childrenLearning App is for children. Learning App is for children Learning App is for children or children or childrenLearning App is for children. Learning App is for children Learning App is for children or children or children',
    tech: ['React', 'Next.js', 'ChakraUI', 'ChakraUI', 'ChakraUI', 'ChakraUI'],
    website: 'https://google.com/',
    github: 'https://github.com/'
  },
  {
    id: 2,
    title: 'SomeApp',
    images: ['work1-1.png', 'work1-2.jpg', 'work1-3.jpg'],
    overview: 'Learning App is for children',
    tech: ['React', 'Next.js', 'ChakraUI'],
    website: 'https://google.com/',
    github: 'https://github.com/'
  },
  {
    id: 3,
    title: 'SomeApp',
    images: ['work1-1.png', 'work1-2.jpg', 'work1-3.jpg'],
    overview: 'Learning App is for children',
    tech: ['React', 'Next.js', 'ChakraUI'],
    website: 'https://google.com/',
    github: 'https://github.com/'
  },
  {
    id: 4,
    title: 'SomeApp',
    images: ['work1-1.png', 'work1-2.jpg', 'work1-3.jpg'],
    overview: 'Learning App is for children',
    tech: ['React', 'Next.js', 'ChakraUI'],
    website: 'https://google.com/',
    github: 'https://github.com/'
  }
]
