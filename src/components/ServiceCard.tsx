interface ServiceCardProps {
    title: string
    description: string
}

export const ServiceCard = ({title, description}: ServiceCardProps) => {
    return (
        <div className="py-4 px-4 bg-[#f6c69f] rounded-xl shadow-md shadow-amber-600">
            <h3 className="text-center tracking-wide font-oswald text-base lg:text-xl leading-7 lg:leading-9 pb-4 text-red-800 font-bold">{title}</h3>
            <p className="text-center font-be-vietnam-pro text-base lg:text-xl lg:leading-9 text-black font-semibold">{description}</p>
        </div>
    )
}
