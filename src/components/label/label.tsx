type LabelProps = {
  text: string
  textSize?: {
    sp: 'text-xs' | 'text-sm' | 'text-base'
    md: 'text-xs' | 'text-sm' | 'text-base'
  }
  width?: {
    sp: 'w-fit' | 'w-28' | 'w-32'
    md: 'w-fit' | 'w-28' | 'w-36'
  }
  size?: 'xs' | 'sm' | 'md'
}

export const Label = ({
  text,
  textSize = { sp: 'text-sm', md: 'text-base' },
  width = { sp: 'w-28', md: 'w-36' }
}: LabelProps) => {
  return (
    <div
      className={`bg-purple-400 px-4 py-2 inline text-gray-50 ${width.sp} md:${width.md} rounded-lg text-center ${textSize.sp} md:${textSize.md}`}
    >
      {text}
    </div>
  )
}
