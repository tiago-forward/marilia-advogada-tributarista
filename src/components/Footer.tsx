import Link from "next/link";

import { socialLinks } from "@/constants"

export const Footer = () => {
    return (
        <footer className="h-40 w-full flex flex-col items-center justify-center transition-colors duration-500 bg-black text-white gap-4 border-t border-zinc-900 bg-black">
            <div className="flex flex-col items-center">
                <p className="text-sm text-center">Todos os Direitos Reservados © 2024</p>
                <span className="text-sm text-amber-600 font-medium">Marília de Souza</span>
            </div>
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
            <div>
                <p className="text-xs text-center">Desenvolvido por <span className="text-blue-700 font-bold"><a href="https://www.linkedin.com/in/tiago-lacerda-devfrontend/" target="_blank" className="hover:underline font-cinzel">TiagoForward</a></span></p>
            </div>
        </footer>
    )
}
