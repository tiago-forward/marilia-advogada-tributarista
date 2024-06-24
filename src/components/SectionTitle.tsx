import { ReactNode } from "react"

interface SectionTitleProps {
    children?: ReactNode
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
    return (
        <h2 className='text-center pt-6 lg:pb-6 text-2xl lg:text-4xl font-oswald tracking-wide'>{children}</h2>
    )
}
