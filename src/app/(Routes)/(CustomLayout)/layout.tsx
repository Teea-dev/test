
import type { Metadata } from 'next'
import '@/base-styles/global.scss';
import { HeaderDefault } from '@/app/_global-components/Header';
import Footer from '@/app/_global-components/Footer';



export default function CustomLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='app-wrapper flex-layout'>
            <HeaderDefault />
            <main className='flex-fill-layout'>
                {children}
            </main>
            <Footer />
        </div>

    )
}
