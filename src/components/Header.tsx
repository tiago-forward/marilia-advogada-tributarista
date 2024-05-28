"use client"

import { useEffect, useState } from "react"

import Link from "next/link";

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
                    ? "fixed h-14 w-full flex flex-row items-center justify-center z-50 transition-colors duration-500 backdrop-blur-sm bg-opacity-80 bg-slate-900"
                    : "fixed h-14 w-full flex flex-row items-center justify-center z-50 transition-colors duration-500 bg-transparent"
            }>
            <Link href={"/"}>
                <h5 className="text-purple text-xl font-semibold">Marília Tributária</h5>
            </Link>
            <nav className="max-w-6xl flex flex-1 items-center justify-center flex-col">
                <li>
                    <Link href={"about"} >Sobre</Link>
                    <Link href={"acting"} >Atuação</Link>
                    <Link href={"news"} >Notícias</Link>
                    <Link href={"contact"} >Contato</Link>
                </li>
            </nav>
        </header>
    )
}