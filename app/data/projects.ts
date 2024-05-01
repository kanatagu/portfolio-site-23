export type ProjectType = {
  id: number
  title: { en: string; ja: string }
  images: string[]
  overview: { en: string; ja: string }
  tech: string[]
  website: string | null
  github: string
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: { en: 'Chat App', ja: 'チャットアプリ' },
    images: ['project1-1.webp', 'project1-2.webp', 'project1-3.webp'],
    overview: {
      en: 'This app is a real chat app inspired by Slack and Discord. I created it with PostgreSQL, Express.js, React.js, and Socket.io for 1 week. It includes features such as joining or leaving a room, checking the members list, CRUD room, editing user info, etc. I deployed using AWS EC2. \n\n I wrote a tutorial article about this application. \n <a href="https://dev.to/kana/full-stack-chat-app-with-socketio-5h" target="_blank" rel="noopener noreferrer">Full Stack Chat App with Socket.io</a> \n\n You can play around with the following test user or create a new account. \nusername: test_user \n password: password',
      ja: 'SlackやDiscardのようなリアルチャットアプリケーションです。こちらはPostgreSQL、Express.js, React.jsとSocket.ioを使って1週間で作成しました。ルームへの入出や退出、メンバーリストの確認、ルームのCRUD機能、ユーザー情報のアップデートの機能などが含まれています。AWSのEC2を使用してデプロイをしました。\n\n 英語にはなりますが、こちらのチュートリアル記事を投稿しております。\n <a href="https://dev.to/kana/full-stack-chat-app-with-socketio-5h" target="_blank" rel="noopener noreferrer">Full Stack Chat App with Socket.io</a> \n\n 新しいアカウントを作成いただくか、下記アカウントでログインが可能です。 \nusername: test_user \n password: password'
    },
    tech: ['Socket.io', 'PostgreSQL', 'AWS', 'React', 'Express.js'],
    website: 'https://dev-chat.xyz',
    github: 'https://github.com/kanatagu/chat-app'
  },
  {
    id: 2,
    title: { en: 'Recipe App', ja: '料理レシピアプリ' },
    images: [
      'project2-1.webp',
      'project2-2.webp',
      'project2-3.webp',
      'project2-4.webp',
      'project2-5.webp'
    ],
    overview: {
      en: 'This recipe app allows you to search and save your favourite recipes. Also, you can share your recipe. There are other features, such as searching, filtering, and posting reviews. I built it for 1 week using Next.js App router with server-side components and actions accessing PostgreSQL using Prisma. \n\n You can create a new account or log in with the following test account. \nEmail: test@test.com \n Password: password',
      ja: 'レシピを検索したりお気に入りに保存することができるレシピアプリです。自分のレシピを投稿することもできます。その他の機能として、検索やフィルタリング、レビュー投稿の機能もあります。 Next.js App routerのサーバーサイドコンポーネントとサーバーアクションを使用して1週間で作りました。\n\n 新しいアカウントを作成いただくか、下記テストユーザーでログインが可能です。\nEmail: test@test.com \n Password: password'
    },
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    website: 'https://recipe-app-ruby-two.vercel.app/',
    github: 'https://github.com/kanatagu/recipe-app'
  },
  {
    id: 3,
    title: { en: 'FairyShare', ja: 'FairyShare' },
    images: [
      'project3-1.webp',
      'project3-2.webp',
      'project3-3.webp',
      'project3-4.webp',
      'project3-5.webp'
    ],
    overview: {
      en: 'FairyShare is share house management app. You can manage house chore, rules, and expenses with your housemates. This is a team project and I led the team to develop smoothly while creating tasks and documents. I provided guidance on the implementation approach for features and reviewed all the code to ensure quality and consistency. We used NestJs, PostgreSQL and wrote end to end tests with Jest for server side. For client side, we used React.js, TypeScript, React Query and TailwindCSS. \n\n You can log in with the following test account. \nEmail: felip@example.com \n Password: password',
      ja: 'FairyShareはシェアハウス管理アプリです。ルールや家事、費用をルームメイトと共有することができます。こちらはチームプロジェクトで、リードエンドエンジニアとして参画し、メンバーがスムーズに開発できるようにタスクやドキュメントを作成しました。機能の実装方法についてアドバイスをし、品質と一貫性を確保するためにすべてのコードをレビューを実施しました。サーバーサイドではNestJs、PostgreSQLを使用し、Jestを使用してE2Eテストを書きました。クライアントサイドではReact.js、TypeScript、React Query、TailwindCSSを使用しました。\n\n 以下のテストユーザーでログインできます。 \nEmail: felip@example.com \n Password: password'
    },
    tech: ['NestJS', 'TypeScript', 'React', 'PostgreSQL', 'TailwindCSS'],
    website: 'https://fairyshare.xyz/',
    github: 'https://github.com/HAK2024/fairy-share'
  },
  {
    id: 4,
    title: { en: 'Dictionary App', ja: '英単語アプリ' },
    images: [
      'project4-1.webp',
      'project4-2.webp',
      'project4-3.webp',
      'project4-4.webp',
      'project4-5.webp'
    ],
    overview: {
      en: 'This app is your own dictionary app using Urban Dictionary API. You can search and save your word list while adding your memo and category. I created this app using React, Express.js, and TypeScript. Currently, I am working on MongoDB to store data and planning to deploy it soon.',
      ja: 'Urban Dictionary APIを使用した、自分専用の英単語アプリです。検索した単語を保存し、メモやカテゴリーを追加することができます。ReactとExpress.js、TypeScriptを使用して作りました。現在はMongoDBを使用してデータを保存できるように変更中で、近々デプロイ予定です。'
    },
    tech: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'ChakraUI'],
    website: null,
    github: 'https://github.com/kanatagu/dictionary-app'
  },
  {
    id: 5,
    title: { en: 'Tabi Memo', ja: 'Tabi Memo' },
    images: [
      'project5-1.webp',
      'project5-2.webp',
      'project5-3.webp',
      'project5-4.webp',
      'project5-5.webp'
    ],
    overview: {
      en: 'This is a travel memo app called "Tabi Memo". You can schedule your trip and save your memo with both a light and dark mode theme. This is a team project and we created this app with GraphQl, Apollo Client using TypeScript and Next.js. First, I made this service wireframe and designed some pages with Figma to gather people. I picked three other developers and started making this app in Nov 2023. My role was leading members to develop smoothly while creating tasks, arranging meetings, designing, and front-end and back-end development. \n\n You can log in with the following test account. \nEmail: gezigeziawawa@gmail.com \n Password: password',
      ja: '「Tabi Memo」という旅行メモアプリで、旅行のスケジュールを立てたり、メモを保存することができます。こちらはチームプロジェクトで、GraphQl、Apollo Client、TypeScript、Next.jsを使用して作りました。初めに、ワイヤーフレームとコアとなるページのデザインをFigmaで作成し、メンバーを集めました。2023年11月に開発を開始し、私は主にメンバーをリードしながら、タスクの作成、ミーティングの手配、デザイン、フロントエンド、バックエンドの開発をしています。\n\n 以下のテストユーザーでログインできます。 \nEmail: gezigeziawawa@gmail.com \n Password: password'
    },
    tech: ['GraphQl', 'Supabase', 'Next.js', 'Apollo Client', 'Figma'],
    website: 'https://tabi-memo.vercel.app/',
    github: 'https://github.com/orgs/tabi-memo/repositories'
  },
  {
    id: 6,
    title: { en: 'Portfolio site', ja: 'ポートフォリオサイト' },
    images: ['project6-1.webp', 'project6-2.webp'],
    overview: {
      en: 'This static website has the feature of dark theme mode using the next-theme library and multi-language mode with next-intl. I learned how to use Figma and basic design rules and made this site with Next.js.',
      ja: 'こちらの静的サイトは、Next-themeを使用したダークモード機能とNext-intlライブラリを使用した言語切り替えを追加しております。\n Figmaの使い方と基本的なデザインルールを学びながら、Next.jsで作成しました。'
    },
    tech: ['Next.js', 'TailwindCSS', 'Figma', 'TypeScript'],
    website: 'https://www.kanataguchi.com/',
    github: 'https://github.com/Kana-TAGUCHI/portfolio-site-23'
  }
]
