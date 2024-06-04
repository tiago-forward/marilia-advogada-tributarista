interface SectionHeadingProps {
    title: string
}

export const SectionHeading = ({ title }: SectionHeadingProps) => {
    return (
        <h2 className='text-center pt-6 lg:pb-6 text-2xl lg:text-4xl font-oswald tracking-wide'>{title}</h2>
    )
}
