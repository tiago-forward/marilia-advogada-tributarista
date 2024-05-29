import React from 'react'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default layout