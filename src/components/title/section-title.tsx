type SectionTitleProps = {
  title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="text-center w-fit mx-auto">
      <h2 className="text-3xl font-bold tracking-wide md:text-4xl">{title}</h2>
      <div className=" h-2 bg-purple-50 mt-2 mx-auto w-3/4" />
    </div>
  )
}
