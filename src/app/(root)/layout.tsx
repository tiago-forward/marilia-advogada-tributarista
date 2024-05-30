import React from 'react'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <a href="https://wa.me/5583998310461" target='_blank' className='group z-50 fixed right-8 bottom-8 grid place-items-center rounded-full cursor-pointer duration-300 ease-linear p-3 lg:p-4 border-2 border-transparent bg-green-500 hover:bg-green-600 hover:border-green-700'>
                <img src="https://img.icons8.com/?size=100&id=62855&format=png&color=ffffff" alt="Icone do Whatsapp" className='w-6 lg:w-8' />
            </a>
        </>
    )
}

export default layout