import Image, { StaticImageData } from "next/image"

interface ServiceCardProps {
    title: string
    description: string
    background?: StaticImageData
}

export const ServiceCard = ({ title, description, background }: ServiceCardProps) => {
    return (
        <>
            <div className="bg-transparent rounded-xl shadow-[rgba(0,_0,_0,_0.50)_0px_8px_20px] relative">
                <div className="opacity-90 brightness-50">
                    {background && (
                        <Image src={background} alt="Background Image" className="rounded-xl shadow-md " objectFit="cover" />
                    )}
                </div>
                {/* <div className="absolute top-6 right-0 left-0 text-center">_________</div> */}
                <h3 className="absolute top-4 left-0 right-0 text-center text-lg leading-7 mb-4 mx-4 text-red-600 font-semibold border-b">{title}</h3>
                <p className="absolute top-14 left-0 right-0 w-full px-4 text-center font-be-vietnam-pro text-base leading-5">{description}</p>
            </div>
        </>
    )
}
