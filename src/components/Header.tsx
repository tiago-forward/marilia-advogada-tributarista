"use client"

import { useEffect, useState } from "react"

import Link from "next/link";

import { navLinks } from "@/constants";
import { CircleUserRound } from "lucide-react";

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
                    ? "z-50 fixed h-14 w-full flex flex-row items-center justify-center transition-colors duration-500 backdrop-blur-sm bg-opacity-80 bg-black text-white shadow-sm shadow-black"
                    : "z-50 fixed h-14 w-full flex flex-row items-center justify-center transition-colors duration-500 bg-transparent text-white shadow-sm shadow-black"
            }>
            <Link href={"/"}>
                <h5 className="text-xl text-purple font-semibold text-amber-700">Marília Tributária</h5>
            </Link>
            <nav className="max-w-6xl flex flex-1 items-center justify-center">
                <ul className="flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <li key={index} className="duration-200 hover:text-amber-600">
                            <Link href={link.url}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Link href={"/contato"} className="flex items-center gap-2 text-xl text-slate-50 hover:text-slate-300 font-semibold bg-amber-600 hover:bg-amber-700 border border-amber-600 hover:border-amber-700 rounded-sm py-1 px-4">
                <CircleUserRound />
                Contato
            </Link>
        </header>
    )
}
