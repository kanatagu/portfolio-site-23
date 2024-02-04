import { SiGithub, SiLinkedin, SiDevdotto } from 'react-icons/si'
import { MdCopyright } from 'react-icons/md'

export const Footer = () => {
  return (
    <footer className="flex flex-col-reverse gap-6 justify-between items-center max-w-container mx-auto w-full mt-32 p-4 pb-10 md:flex-row">
      <div className="dark:text-gray-100 text-sm flex items-center gap-1">
        <MdCopyright size="16" />
        Copyright 2023. Created by by Kana
      </div>
      <div className="flex justify-between text-2xl font-bold w-1/4 md:text-3xl md:w-40">
        <a
          href={'https://www.linkedin.com/in/kana-taguchi/'}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-wiggle"
        >
          <SiLinkedin />
        </a>
        <a
          href={'https://github.com/kanatagu'}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-wiggle"
        >
          <SiGithub />
        </a>
        <a
          href={'https://dev.to/kana'}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-wiggle"
        >
          <SiDevdotto />
        </a>
      </div>
    </footer>
  )
}
