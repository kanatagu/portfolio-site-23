'use client'
import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { MdClose } from 'react-icons/md'
import { SiGithub } from 'react-icons/si'
import { FiLink } from 'react-icons/fi'
import { Label } from '@/components/label'
import { ItemAnimation } from '@/components/animation'
import { ProjectType } from '@/data'

type ProjectCardProps = {
  project: ProjectType
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [showModal, setShowModal] = useState(false)
  const pathname = usePathname()

  const title = pathname === '/ja' ? project.title.ja : project.title.en
  const overview =
    pathname === '/ja' ? project.overview.ja : project.overview.en

  return (
    <>
      <ItemAnimation className="max-w-[340px] rounded-lg cursor-pointer group/item ">
        <div
          role="button"
          tabIndex={project.id}
          onClick={() => setShowModal(true)}
          className="h-full"
        >
          <div className="relative h-56 rounded-t-lg bg-black">
            <Image
              src={`/images/projects/${project.images[0]}`}
              alt={`${title} project`}
              width={340}
              height={227}
              className="object-cover object-top h-full w-[340px] rounded-t-lg group-hover/item:opacity-30"
            />
            <div className="opacity-0 absolute inset-0 flex flex-col items-center justify-center text-xl text-gray-100 transition-all duration-500 ease-in-out group-hover/item:opacity-100">
              See Details
            </div>
          </div>
          <div className="px-4 py-5 bg-purple-400 dark:bg-purple-500 opacity-80">
            <h3 className="text-gray-50 text-xl font-medium">{title}</h3>
            <p className="text-gray-100 dark:text-gray-100 pt-2 text-sm line-clamp-2">
              {overview}
            </p>
            <div className="flex gap-4 pt-4">
              {project.tech.slice(0, 3).map((item) => (
                <Label
                  key={item}
                  text={item}
                  size={'xs'}
                  bgColorLight="bg-purple-200"
                  bgColorDark="bg-gray-300"
                  fontWeight={'font-medium'}
                />
              ))}
            </div>
          </div>
        </div>
      </ItemAnimation>

      {showModal && (
        <div
          className="relative z-40"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 opacity-80 bg-gray-300 transition-opacity"></div>
          <div className="fixed inset-0 w-screen">
            <div className="flex min-h-full justify-center p-4 md:max-w-[56rem] mx-auto">
              <div className="relative transform overflow-auto rounded-lg bg-beige-50 dark:bg-black text-left shadow-xl transition-all md:w-full">
                <div className="relative px-4 py-10 md:px-8 md:py-12 overflow-hidden">
                  <button
                    className="absolute top-2 right-2 text-gray-300 dark:text-gray-50 font-bold w-fit ml-auto text-2xl md:text-4xl md:top-3 md:right-3 hover:opacity-80"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <MdClose />
                  </button>
                  <div className="overflow-y-auto max-h-[calc(100svh-112px)] md:max-h-[calc(100vh-128px)] ">
                    <div>
                      <Swiper
                        slidesPerView={'auto'}
                        navigation={true}
                        pagination={{
                          clickable: true
                        }}
                        autoplay={{
                          delay: 5000
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                      >
                        {project.images.map((image) => (
                          <SwiperSlide key={image}>
                            <div className="bg-gray-200 w-80 mx-auto p-1 h-44 md:w-4/5 md:h-96 md:p-2">
                              <a
                                href={`/images/projects/${image}`}
                                target="_blank"
                              >
                                <img
                                  src={`/images/projects/${image}`}
                                  width="660"
                                  height="440"
                                  alt="project"
                                  className="w-full object-cover object-top h-full"
                                ></img>
                              </a>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    <div className="pt-6 md:w-4/5 md:mx-auto">
                      <h3
                        className="text-xl font-bold md:text-2xl dark:text-gray-100"
                        id="modal-title"
                      >
                        {title}
                      </h3>
                      <div className="flex flex-col gap-8 pt-8 md:px-3">
                        <div>
                          <h4 className="font-bold dark:text-gray-100 mb-3 md:text-xl">
                            Overview
                          </h4>
                          <p
                            className="text-sm dark:text-gray-100 whitespace-pre-line md:text-base [&>a]:text-purple-200 [&>a]:dark:text-purple-50"
                            dangerouslySetInnerHTML={{
                              __html: overview
                            }}
                          />
                        </div>

                        <div>
                          <h4 className="font-bold dark:text-gray-100 mb-3 md:text-xl">
                            Technology
                          </h4>
                          <div className="flex gap-4 flex-wrap">
                            {project.tech.map((item) => (
                              <Label key={item} text={item} size={'sm'} />
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold dark:text-gray-100 flex items-center mb-2 md:text-xl">
                            <span className="pr-2 md:pr-2">
                              <FiLink />
                            </span>
                            Website
                          </h4>
                          {project.website ? (
                            <a
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-purple-200 dark:text-purple-50 underline md:text-base hover:opacity-70"
                            >
                              {project.website}
                            </a>
                          ) : (
                            <div>Coming soon!</div>
                          )}
                        </div>

                        <div>
                          <h4 className="font-bold dark:text-gray-100 flex items-center mb-2 md:text-xl">
                            <span className="pr-1 md:pr-2">
                              <SiGithub />
                            </span>
                            Github
                          </h4>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-purple-200 dark:text-purple-50 underline md:text-base hover:opacity-70"
                          >
                            {project.github}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
