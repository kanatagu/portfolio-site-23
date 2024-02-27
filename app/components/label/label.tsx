type LabelProps = {
  text: string
  size?: 'xs' | 'sm' | 'md'
  w?: string
  bgColorLight?: string
  bgColorDark?: string
}

export const Label = ({
  text,
  size = 'md',
  w = 'w-fit',
  bgColorLight = 'bg-purple-200',
  bgColorDark = 'dark:bg-purple-400'
}: LabelProps) => {
  return (
    <div
      className={`${bgColorLight} ${bgColorDark} px-4 py-2 inline text-gray-50 rounded-lg text-center ${w} ${
        size === 'xs' && 'text-xs md:text-xs '
      } ${size === 'sm' && 'text-xs md:text-sm '}${
        size === 'md' && 'text-sm md:text-base'
      } `}
    >
      {text}
    </div>
  )
}
