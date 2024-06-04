import Image, { StaticImageData } from "next/image"

interface ServiceCardProps {
    title: string
    description: string
    background: StaticImageData
}

export const ServiceCard = ({ title, description, background }: ServiceCardProps) => {
    return (
        <>
            <div className="group cursor-pointer bg-transparent rounded-xl shadow-[rgba(0,_0,_0,_0.50)_0px_8px_20px] relative">
                <div className="opacity-90 brightness-50 saturate-0 rounded-xl group-hover:opacity-80 group-hover:backdrop-brightness-0 group-hover:saturate-100">
                    {background && (
                        <Image src={background} alt="Background Image" className="rounded-xl shadow-md " objectFit="cover" />
                    )}
                </div>
                <h3 className="absolute top-0 left-0 right-0 h-full flex items-center justify-center text-center text-xl leading-7 mb-4 mx-4 text-amber-600 font-semibold duration-700 group-hover:block group-hover:h-0 group-hover:mt-4">{title}</h3>
                <p className="absolute top-24 left-0 right-0 w-full px-4 text-center font-be-vietnam-pro text-base leading-5 duration-700 hidden translate-y-0.5 group-hover:block ">{description}</p>
            </div>
        </>
    )
}
