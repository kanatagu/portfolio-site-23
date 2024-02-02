export type WorkType = {
  id: number
  title: { en: string; ja: string }
  images: string[]
  overview: { en: string; ja: string }
  tech: string[]
  story: { en: string; ja: string }
  website: string | null
  github: string
}

export const works: WorkType[] = [
  {
    id: 1,
    title: { en: 'Recipe App', ja: '料理レシピアプリ' },
    images: [
      'work1-1.webp',
      'work1-2.webp',
      'work1-3.webp',
      'work1-4.webp',
      'work1-5.webp'
    ],
    overview: {
      en: '',
      ja: ''
    },
    tech: ['TypeScript', 'Next.js'],
    story: {
      en: 'story',
      ja: 'story'
    },
    website: null,
    github: ''
  },
  {
    id: 2,
    title: { en: 'Dictionary App', ja: '英単語アプリ' },
    images: [
      'work2-1.webp',
      'work2-2.webp',
      'work2-3.webp',
      'work2-4.webp',
      'work2-5.webp'
    ],
    overview: {
      en: '',
      ja: ''
    },
    tech: ['TypeScript', 'React'],
    story: {
      en: 'story',
      ja: 'story'
    },
    website: null,
    github: ''
  },
  {
    id: 3,
    title: { en: 'Tabi Memo', ja: 'Tabi Memo' },
    images: [
      'work3-1.webp',
      'work3-2.webp',
      'work3-3.webp',
      'work3-4.webp',
      'work3-5.webp'
    ],
    overview: {
      en: '',
      ja: ''
    },
    tech: ['TypeScript', 'Next.js'],
    story: {
      en: 'story',
      ja: 'story'
    },
    website: null,
    github: ''
  },
  {
    id: 4,
    title: { en: 'Portfolio site', ja: 'ポートフォリオサイト' },
    images: ['work4-1.webp', 'work4-2.webp'],
    overview: {
      en: 'This static website has feature of dark theme mode and multi language mode. I designed with Figma and made it with Next.js.',
      ja: 'こちらの静的サイトは、ダークモード機能と言語切り替えを追加しております。\nデザインはFigma、サイトはNext.jsで作りました。'
    },
    tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'Figma'],
    story: {
      en: 'story',
      ja: 'story'
    },
    website: 'https://www.kanataguchi.com/',
    github: 'https://github.com/Kana-TAGUCHI/portfolio-site-23'
  },
  {
    id: 5,
    title: { en: 'Budget App', ja: '家計簿アプリ' },
    images: ['work5-1.webp', 'work5-2.webp', 'work5-3.webp'],
    overview: {
      en: 'This is the first application using React.js I made in 2021. I made this to calculate monthly fee and add the feature of authorization using Firebase. You can login using this test user. \nEmail address: test@gmail.com, password: test1133',
      ja: '2021年にReactを使用して初めて作ったアプリです。月毎の出費を確認することができ、またサインアップ/ログイン機能もついています。こちらのテストユーザーを使用してご確認いただけます。\nEmail address: test@gmail.com, password: test1133'
    },
    tech: ['React.js', 'Firebase'],
    story: {
      en: 'story',
      ja: 'story'
    },
    website: 'https://my-budget-app-fc01e.web.app/',
    github: 'https://github.com/Kana-TAGUCHI/My-budget-app'
  }
]
