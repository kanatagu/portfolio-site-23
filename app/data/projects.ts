export type ProjectType = {
  id: number
  title: { en: string; ja: string }
  images: string[]
  overview: { en: string; ja: string }
  tech: string[]
  story: { en: string; ja: string }
  website: string | null
  github: string
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: { en: 'Recipe App', ja: '料理レシピアプリ' },
    images: [
      'project1-1.webp',
      'project1-2.webp',
      'project1-3.webp',
      'project1-4.webp',
      'project1-5.webp'
    ],
    overview: {
      en: 'This is a recipe app that you can search and save your favorite recipes. Also you can share with your recipe. I made this app with Next.js App router using server side components and actions.',
      ja: 'レシピを検索したりお気に入りに保存することができるレシピプリです。自分のレシピを投稿することもできます。Next.jsのApp routerを使用してサーバーサイドコンポーネントとアクションを使って作りました。'
    },
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    story: {
      en: 'I made this app to improve my skills of Next.js and Prisma. \n\n Some things I learned from this projects. \n - How server side components work as well as client side components. \n - How to use server side actions with validations \n - How to use Prisma to connect with PostgreSQL as well as database schema design. \n\n I created this app for 8 days. I still have some features to add and improve, but I am currently adding account form and planning to deploy soon.',
      ja: 'このアプリは主にNext.jsとPrismaのスキルを向上させるために作りました。\n\n 実装の過程で下記の点を学びました。\n - サーバーサイドコンポーネントとクライアントサイドコンポーネントの動き/作り方 \n - サーバーサイドアクションの使い方とバリデーション \n - Prismaを使ってPostgreSQLとの接続方法とデータベーススキーマの設計 \n\n 新しいスキルセットでしたが、8日間で作り終えました。まだまだ改善/追加したい機能はありますが、現在はアカウントフォームを追加中で、近々サーバーにデプロイする予定です。'
    },
    website: null,
    github: 'https://github.com/kanatagu/recipe-app'
  },
  {
    id: 2,
    title: { en: 'Dictionary App', ja: '英単語アプリ' },
    images: [
      'project2-1.webp',
      'project2-2.webp',
      'project2-3.webp',
      'project2-4.webp',
      'project2-5.webp'
    ],
    overview: {
      en: 'This is your own dictionary app using Urban Dictionary API. You can search and save your own words list while you can add your memo and category. I made this app with React and Express.js.',
      ja: 'Urban Dictionary APIを使用した、自分専用の英単語アプリです。検索した単語を保存し、メモやカテゴリーを追加することができます。ReactとExpress.jsを使用して作りました。'
    },
    tech: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'ChakraUI'],
    story: {
      en: 'I used the latest React Router and Express.js with TypeScript. I could catch up the latest React Router with this app since the last time I used it was 2 years ago. \n\n This is the things I learned from this projects. \n - How to use Express.js with TypeScript \n - What is the difference between SWR and other fetching libraries such as RTKQuery and ReactQuery \n - Different type of folder structure. I basically used type folder structures because this is small app but I also combined feature folder structure for the first time, and it worked well \n\n I am currently working on MongoDB to store data and planning to deploy soon.',
      ja: '最新のReact Routerと、Express.jsはTypeScriptを使用してアプリを作りました。React Routerを最後に使用したのは2年前程になるので、キャッチアップする良い機会でした。\n\n 実装の過程で下記の点を学びました。\n - TypeScriptを使ったExpress.jsの使い方 \n - SWRとRTKQuery、ReactQueryの違い \n - 新しいフォルダーストラクチャーを再現。基本的にはタイプのフォルダストラクチャーを採用していますが、フィーチャー構造を少し組み合わせた良いところ取りで試しました。\n\n 現在は、MongoDBを使用してデータを保存する作業中で、近々デプロイする予定です。'
    },
    website: null,
    github: 'https://github.com/kanatagu/dictionary-app'
  },
  {
    id: 3,
    title: { en: 'Tabi Memo', ja: 'Tabi Memo' },
    images: [
      'project3-1.webp',
      'project3-2.webp',
      'project3-3.webp',
      'project3-4.webp',
      'project3-5.webp'
    ],
    overview: {
      en: 'This is a travel memo app called "Tabi Memo". You can schedule your trip and save your memo. This is a team project and we made this app with GraphQl, Apollo Client using TypeScript and Next.js.',
      ja: '「Tabi Memo」という旅行メモアプリです。旅行のスケジュールを立てたり、メモを保存することができます。チームプロジェクトで、GraphQl、Apollo Client、TypeScript、Next.jsを使用して作りました。'
    },
    tech: ['GraphQl', 'Supabase', 'TypeScript', 'Apollo Client', 'Figma'],
    story: {
      en: 'I made this service wireframe and designed some pages with Figma to gather people. I gathered 3 other developers and started making this app in Nov 2023. My role was mainly leading members to develop smoothly while making tasks and arranging meeting, designing and front-end development. \n\n I learned many things from this project. \n - How to use GraphQl and Apollo Client with TypeScript \n - How to use Supabase to store data \n - JavaScript Timezone handling with deep understanding Data behavior \n - UI designing \n\n We are currently working on the last part of the app and planning to deploy by March 2024.',
      ja: '初めに、ワイヤーフレームとコアとなるページのデザインをFigmaで作成し、メンバーを集めました。2023年11月に開発を開始し、私は主にメンバーをリードしながら、タスクの作成、ミーティングの手配、デザイン、フロントエンド開発を行いました。\n\n 実装の過程で下記の点を学びました。\n - TypeScriptを使ったGraphQlとApollo Clientの使い方 \n - Supabaseを使ってデータを保存する方法 \n - JavaScriptのタイムゾーン処理とデータの挙動を深く理解すること \n - UIデザイン \n\n 現在はアプリの最終段階に取り組んでおり、2024年3月にデプロイする予定です。'
    },
    website: null,
    github: 'https://github.com/orgs/tabi-memo/repositories'
  },
  {
    id: 4,
    title: { en: 'Portfolio site', ja: 'ポートフォリオサイト' },
    images: ['project4-1.webp', 'project4-2.webp'],
    overview: {
      en: 'This static website has feature of dark theme mode and multi language mode. I designed with Figma and made it with Next.js.',
      ja: 'こちらの静的サイトは、ダークモード機能と言語切り替えを追加しております。\nデザインはFigma、サイトはNext.jsで作りました。'
    },
    tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'Figma'],
    story: {
      en: 'This is the first website I designed with Figma. I learned how to use Figma as well as basic design rules. I also added language switcher and dark mode for learning purpose. I made this with next-intl and next-theme library.',
      ja: 'Figmaを使用してデザインした初めてのサイトです。Figmaの使い方と基本的なデザインルールを学びました。技術習得の目的もあり、言語切り替え機能やダークモードも追加しました。next-intlとnext-themeのライブラリを採用し作成しました。'
    },
    website: 'https://www.kanataguchi.com/',
    github: 'https://github.com/Kana-TAGUCHI/portfolio-site-23'
  },
  {
    id: 5,
    title: { en: 'Budget App', ja: '家計簿アプリ' },
    images: ['project5-1.webp', 'project5-2.webp', 'project5-3.webp'],
    overview: {
      en: 'This is a budget app tha you can manage your income and expenses monthly. I made this app with React.js and Firebase. \n\n You can login using this test user. \nEmail: test@gmail.com \n Password: test1133',
      ja: 'React.jsとFirebaseを使用して作成した、毎月の収入と支出を管理する家計簿アプリです。\n\n 以下のテストユーザーでログインできます。 \nEmail: test@gmail.com \n Password: test1133'
    },
    tech: ['React.js', 'Firebase', 'CSS'],
    story: {
      en: 'I made this app to learn React.js for the first time in 2021. I learned how to use React.js and Firebase. I started making this app after learning basic of React.js for 1 week.At the time I learned many things from this project. \n - How to use React.js with props and hooks \n - Firebase authentication and Firestore database schema design \n - Making UI with CSS \n\n This is a memorable app that I made before becoming an front-end developer.',
      ja: '2021年にReact.jsを初めて学ぶために作成し、React.jsとFirebaseの使い方を学びました。React.jsの基本を1週間学んだ後に作り始めたので、たくさんの学びがありました。\n - React.jsの使い方とpropsとhooks \n - Firebaseの認証とFirestoreのデータベーススキーマの設計 \n - CSSを使ったUIの作り方 \n\n フロントエンドエンジニアになる前に作成した思い出深いアプリです。'
    },
    website: 'https://my-budget-app-fc01e.web.app/',
    github: 'https://github.com/Kana-TAGUCHI/My-budget-app'
  }
]
