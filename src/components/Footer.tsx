import Link from "next/link";
import Image from "next/image";

import { socialLinks } from "@/constants"

export const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center transition-colors duration-500 bg-black text-white gap-4 border-t border-zinc-900 py-10">
            <div className="w-full max-w-screen-xl m-auto flex flex-col items-center gap-4">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-2 w-full">
                    <span className="text-sm text-amber-600 font-medium uppercase">Marília de Souza</span>
                    <nav className="flex">
                        <ul className="flex items-center justify-center gap-2">
                            {socialLinks.map((link) => (
                                <li key={link.id} className="duration-200 hover:text-amber-600">
                                    <Link href={link.url} target="_blank">
                                        {link.icon && <link.icon />}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="w-full flex justify-center lg:justify-start">
                    <a href="https://advocaciajf.com/" target="_blank"><Image src="https://advocaciajf.com/wp-content/uploads/2024/03/Logotipo-Redesenhada-3.png" width={112} height={50} alt="Logo da Jonathan Ferrari Advocacia Inteligente" /></a>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-center">Todos os Direitos Reservados Copyright © {new Date().getFullYear()}</p>
                    <div>
                        <p className="text-xs text-center">Desenvolvido por <span className="text-blue-700 font-bold"><a href="https://www.linkedin.com/in/tiago-lacerda-devfrontend/" target="_blank" className="hover:underline font-cinzel">TiagoForward</a></span></p>
                        <p className="text-xs text-center">
                            <a href="https://www.freepik.com/" target="_blank">
                                Used images of Freepik
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
