import Image from "next/image";

import { ClipboardList } from "lucide-react";
import ImagemIlustrativa from '../../../../../../public/OIP.jpeg'

export default function MainPostCard() {
    return (
        <div className="grid grid-cols-1 gap-4 mb-10  px-2 pb-2 pt-4 rounded-md">
            <div className="flex items-center justify-center">
                <Image src={ImagemIlustrativa} alt="Image Ilustrativa" width={800} className="rounded-xl shadow-[rgba(75,_70,_63,_0.50)_0px_0px_150px]" />
            </div>
            <div className="flex flex-col gap-4 text-center relative">
                <h1 className="pt-6 lg:pb-6 text-2xl lg:text-4xl font-oswald tracking-wide">Como um advogado tributarista pode ajudar no crescimento dos seus negócios?</h1>
                <p className="font-oswald text-slate-300 opacity-70 text-lg lg:text-xl leading-7 lg:leading-9">Um advogado tributarista desempenha um papel crucial no crescimento dos negócios, especialmente considerando a complexidade do sistema tributário. Aqui estão algumas maneiras...</p>
                <div className="flex flex-col text-center">
                    <div className="flex justify-between gap-1 md:px-4">
                        <span className="text-md text-amber-600">Marília Souza</span>
                        <a href="/" className="flex items-center gap-1 text-md text-slate-300 hover:text-slate-100 opacity-80 hover:opacity-100">
                            <ClipboardList className="size-4" />
                            <p>Leia mais</p>
                        </a>
                    </div>
                    <div>
                        <span className="text-slate-300">07 de jun de 2024</span>
                    </div>
                </div>
                <div className="user-select-none center pointer-events-none absolute -bottom-2.5 left-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(199,160,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
            </div>
        </div>
    )
}
