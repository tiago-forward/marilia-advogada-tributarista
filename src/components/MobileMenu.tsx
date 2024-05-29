"use cliente"

import { useState } from "react"
import { CircleUserRound, Menu, X } from "lucide-react"

import Link from "next/link"

import { navLinks, socialLinks } from "@/constants"

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleNavLinkMenu = (() => {
        if (isOpen === true) {
            setIsOpen(!isOpen)
        }
    })

    return (
        <div className="lg:hidden">
            <button onClick={handleToggleMenu} className="hover:text-amber-600">
                <Menu />
            </button>

            <div className={`z-50 w-9/12 h-screen flex flex-col absolute right-0 top-0 bg-black transition-all duration-300 ease-in-out transform
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

                <div className="w-full flex items-center justify-between h-20 border-b border-zinc-900">
                    <Link onClick={handleNavLinkMenu} href={"/"}>
                        <h5 className="text-sm lg:text-xl text-purple font-semibold text-amber-700 px-4">Marília Tributarista</h5>
                    </Link>

                    <button
                        onClick={handleToggleMenu}
                        className="hover:text-amber-600 px-4"
                    >
                        <X />
                    </button>
                </div>

                <nav className="flex flex-col flex-1 items-end justify-center gap-8 pr-4">
                    <ul className="flex flex-col items-center gap-8">
                        {navLinks.map((link, index) => (
                            <li onClick={handleNavLinkMenu} key={index} className="duration-200 hover:text-amber-600">
                                <Link href={link.url}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link onClick={handleNavLinkMenu} href={"/contact"} className="flex items-center gap-2 text-xl text-slate-50 hover:text-slate-300 font-semibold bg-amber-600 hover:bg-amber-700 border border-amber-600 hover:border-amber-700 rounded-sm py-1 px-4">
                        <CircleUserRound />
                        Contato
                    </Link>
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
        </div>
    )
}
