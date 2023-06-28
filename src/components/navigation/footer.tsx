import { SiGithub, SiLinkedin } from 'react-icons/si'

export const Footer = () => {
  return (
    <footer className="flex flex-col-reverse gap-6 justify-between items-center max-w-container mx-auto w-full mt-32 p-4 pb-10 md:flex-row">
      <div className="text-gray-100 text-sm">
        Designed and Created by Kana 2023
      </div>
      <div className="flex justify-between text-2xl font-bold w-1/4 md:text-3xl md:w-40">
        <a
          href={'https://www.linkedin.com/in/kana-taguchi-49a510271/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin />
        </a>
        <a
          href={'https://github.com/Kana-TAGUCHI'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </a>
      </div>
    </footer>
  )
}
