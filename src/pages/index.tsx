import Image from 'next/image'
import { Link } from 'react-scroll'
import { Header, Footer } from '@/components/navigation'
import { SectionTitle } from '@/components/title'
import { Label } from '@/components/label'
import { DevIcons } from '@/components/icon'
import { WorkCard } from '@/components/card'
import { works } from '@/data'

export default function Home() {
  return (
    <div className="font-main text-black bg-beige-50 dark:bg-black dark:text-gray-50 min-h-screen">
      <Header />
      <main className="pt-20 px-4 max-w-container mx-auto">
        {/* HERO */}
        <section className="pt-16 md:pt-36" id="home">
          <h1 className="text-5xl font-bold tracking-wide md:text-7xl dark:text-gray-100">
            Hi, I&apos;m
            <span className="text-purple-100 block md:inline md:pl-2">
              Kana Taguchi
              <span className="text-black dark:text-gray-100">.</span>
            </span>
          </h1>
          <p className="text-2xl font-semibold pt-10 tracking-wide md:text-4xl">
            Build web applications and services
          </p>
          <p className="text-lg pt-6 tracking-wide md:text-2xl">
            I&apos;m a creative web developer, experiences with front-end,
            back-end and design.
          </p>
          <div className="pt-12">
            <Link
              className="inline-block btn-square"
              to="work"
              spy={true}
              smooth={true}
              offset={-120}
              duration={650}
            >
              VIEW MY WORKS
            </Link>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mt-32 md:mt-60" id="about">
          <SectionTitle title="ABOUT ME" />
          <div className="flex flex-col items-center mt-11 text-center justify-items-center md:flex-row md:justify-between md:text-left md:mt-14">
            <div className="md:w-[42%]">
              <Image
                src="/images/me.jpg"
                alt="face picture"
                width="600"
                height="600"
                className="rounded-full w-full h-auto"
              />
            </div>
            <div className="mt-16 md:w-[47%] md:mt-0">
              <div>
                <h3 className="font-bold text-2xl">Story</h3>
                <p className="mt-4 text-left md:text-lg md:mt-8">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium.{' '}
                </p>
              </div>
              <div className="mt-16 md:mt-18">
                <h3 className="font-bold text-2xl">Things I like</h3>
                <div className="flex flex-wrap mt-4 gap-4 justify-center md:mt-8 md:gap-10 md:justify-start">
                  <Label text="WorkOut" />
                  <Label text="Learning" />
                  <Label text="Hiking" />
                  <Label text="Volleyball" />
                  <Label text="Movie" />
                  <Label text="Cooking" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MY SKILLS */}
        <section className="mt-32 md:mt-60" id="skills">
          <SectionTitle title="MY SKILLS" />
          <div className="flex flex-col gap-11 items-center mt-11 text-center md:items-start md:text-left md:gap-16 md:mt-14">
            <div>
              <h3 className="font-bold text-xl text-purple-400 dark:text-purple-50">
                Front End
              </h3>
              <DevIcons type="frontEnd" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-purple-400 dark:text-purple-50">
                Back End
              </h3>
              <DevIcons type="backEnd" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-purple-400 dark:text-purple-50">
                Tools
              </h3>
              <DevIcons type="tool" />
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="mt-32 md:mt-60" id="work">
          <SectionTitle title="WORK" />
          <div className="text-black dark:text-gray-100 mt-10 md:text-xl md:text-center md:mt-14">
            Some things I&apos;ve built for companies and personal projects.{' '}
            <br />
            Please click each projects to see more information.
          </div>
          <div className="mt-10 flex flex-col flex-wrap gap-4 items-center md:flex-row md:mt-14 md:gap-7">
            {works.map((work) => (
              <WorkCard work={work} key={work.id} />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="pt-32 md:pt-60" id="contact">
          <SectionTitle title="CONTACT" />
          <p className="dark:text-gray-100 mt-10 md:text-xl md:text-center md:mt-14">
            I&apos;m currently looking for a new opportunity. <br />
            If you have any questions about me, projects or anything, please
            feel free to contact me.
          </p>
          <div className="text-center mt-12">
            <a href="mailto:kana.vc2341@gmail.com" className="inline-block btn">
              GET IN TOUCH
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
