"use client"

import { useEffect, useState } from "react"
import { CircleUserRound } from "lucide-react";

import Link from "next/link";

import { navLinks, socialLinks } from "@/constants";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
    const [effectScroll, setEffectScroll] = useState<boolean>(false)

    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setEffectScroll(true)
        } else {
            setEffectScroll(false)
        }
    }

    useEffect(() => {
        return window.addEventListener('scroll', scrollHeader)
    }, [])

    return (
        <header
            className={
                effectScroll
                    ? "z-50 fixed h-14 w-full flex flex-row items-center justify-between lg:justify-center transition-colors duration-500 backdrop-blur-sm bg-opacity-80 bg-black text-white shadow-md shadow-amber-600"
                    : "z-50 fixed h-14 w-full flex flex-row items-center justify-between lg:justify-center transition-colors duration-500 bg-transparent text-white shadow-amber-600"
            }>
            <Link href={"/"}>
                <h5 className="text-sm lg:text-xl text-purple font-semibold text-amber-700 uppercase">Adovagada Tributarista</h5>
            </Link>
            <nav className="hidden max-w-6xl lg:flex lg:flex-1 lg:items-center lg:justify-center gap-8">
                <ul className="flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <li key={index} className="duration-200 hover:text-amber-600">
                            <Link href={link.url}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
                {/* <Link href={"/contact"} className="flex items-center gap-2 text-xl text-slate-50 hover:text-slate-300 font-semibold bg-amber-600 hover:bg-amber-700 border border-amber-600 hover:border-amber-700 rounded-sm py-1 px-2">
                    Fale conosco
                </Link> */}
            </nav>
            <nav className="hidden lg:flex">
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
            <MobileMenu />
        </header>
    )
}
