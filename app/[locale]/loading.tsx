import { FaSpinner } from 'react-icons/fa6'

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-purple-200 bg-beige-50 dark:bg-black">
      <div className="animate-spin-slow text-6xl">
        <FaSpinner />
      </div>
    </div>
  )
}
