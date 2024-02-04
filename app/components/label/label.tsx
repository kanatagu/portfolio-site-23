type LabelProps = {
  text: string
  size?: 'xs' | 'sm' | 'md'
}

export const Label = ({ text, size = 'md' }: LabelProps) => {
  return (
    <div
      className={`bg-purple-200 dark:bg-purple-400 px-4 py-2 inline text-gray-50 rounded-lg text-center ${
        size === 'xs' && 'w-fit text-xs md:text-xs '
      } ${size === 'sm' && 'w-fit text-xs md:text-sm '}${
        size === 'md' && 'w-28 md:w-36 text-sm md:text-base '
      } `}
    >
      {text}
    </div>
  )
}
