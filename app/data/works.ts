export type WorkType = {
  id: number
  title: { en: string; ja: string }
  images: string[]
  overview: { en: string; ja: string }
  tech: string[]
  website: string | null
  github: string | null
}

export const works: WorkType[] = [
  {
    id: 1,
    title: { en: 'Learning Child App', ja: '小学生学習アプリ' },
    images: ['work1-1.webp', 'work1-2.webp', 'work1-3.webp', 'work1-4.webp'],
    overview: {
      en: 'Learning subscription service for elementary school children. This service encourage children to improve their thinking skills. I joined as a front end-lead engineer and it took for one year to release from scratch.',
      ja: '小学生用のサブスク型学習サービスです。子どもたちの考える力を鍛える内容を提供しています。フロントエンドリーダーとして参画し、0→1開発を担当しました。リリースまでは1年の大きめのプロジェクトです。'
    },
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
    title: { en: 'Moving Matching App', ja: '引越しマッチングアプリ' },
    images: ['work2-1.jpg', 'work2-2.jpg', 'work2-3.jpg'],
    overview: {
      en: 'Matching web service for people who live alone and moving companies with providing low fixed cost. There are many form for users to find potential companies to match. I joined as a front end developer.',
      ja: '単身者向けの引越しマッチングアプリで、基本的には固定且つ安価でユーザーはサービスを利用できます。見積もりの段階でユーザーの場所や内容を入力すると、金額と日程が表示されます。\nフロントエンドエンジニアとして参画しておりました。'
    },
    tech: ['TypeScript', 'React', 'Sass', 'Axious', 'React Hook Form'],
    website: 'https://www.t-hikkoshi-navi.jp/',
    github: null
  },
  {
    id: 3,
    title: { en: 'Portfolio site', ja: 'ポートフォリオサイト' },
    images: ['work3-1.jpg', 'work3-2.jpg'],
    overview: {
      en: 'This static website has feature of dark theme mode and multi language mode. I designed and made it with Next.js',
      ja: 'こちらの静的サイトは、ダークモード機能と言語切り替えを追加しております。\nデザインはFigma、サイトはNext.jsで作りました。'
    },
    tech: ['TypeScript', 'Next.js', 'TailwindCSS'],
    // TODO Change URL
    website: 'https://portfolio-site-23-6yux5zdx3-kana-taguchi.vercel.app/',
    github: 'https://github.com/Kana-TAGUCHI/portfolio-site-23'
  }
]
