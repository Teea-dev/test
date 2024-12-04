'use client'
// import NotFoundTemplate from '@/app/_global-components/NotFoundTemplate';
import { Metadata } from 'next';
// import { HeaderLogoWithLinksAuth } from './_global-components/Header';


export default function NotFound() {
    return (
        <div>
            404 Page Not Found.
        </div>
        // <NotFoundTemplate
        //     HeadingComponent={<HeaderLogoWithLinksAuth />}
        //     headingText='Oops! seems you have entered
        //     the digital wilderness'
        //     subText={`Sorry, we could not find the page your are looking for. we suggest you go back home`}
        // />
    )
}

export const metadata: Metadata = {
    title: '404 Page Not Found',
    robots: {
        index: false
    }
}