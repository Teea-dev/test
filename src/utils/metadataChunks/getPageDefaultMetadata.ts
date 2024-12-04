import { Metadata } from "next";

/* 
-- Description --
* A Fuction that helps generate a page metadata with some defualt values

-- Params --
* title: Means the tittle for the page that can be used for og graph or twitter card;
* desc: Means the description for the page that can be used for og graph or twitter card;
* url: Is the path url to the page 'getPageDefaultMetadata' is called in;
*/

export default function getPageDefaultMetadata(title: string, desc: string, url: string): Metadata {
    const titleSufix = '| StarzFi';

    return {
        title: title,
        description: desc,
        openGraph: {
            type: 'website',
            siteName: 'StarzFi',
            images: [{
                url: '/imgs/preview1.webp',
                alt: 'StarzFi Website',
            }],
            title: `${title} ${titleSufix}`,
            description: desc,
            url: url,
        },
        twitter: {
            card: 'summary_large_image',
            site: '@BlackTiyemi',
            siteId: '573869701',
            creator: '@BlackTiyemi',
            creatorId: '573869701',
            images: [{
                url: '/imgs/preview1.webp',
                alt: 'StarzFi Website',
            }],
            title: `${title} ${titleSufix}`,
            description: desc
        }
    }
}