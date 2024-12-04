import { MetadataRoute } from 'next';

/* Generate sitemap for Google Crawling Bot */


const routes = [
    '/',
    '/for-celebrities',
    '/how-it-works',
    '/join-the-team',
    '/download',
    '/openings',
    '/legal-center',
    '/join-the-team',
    '/join-the-team/additional-terms',
    '/join-the-team/community-guidelines',
    '/join-the-team/privacy-policy',
    '/join-the-team/terms-of-service',
]


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const routeSiteMaps = routes.map(route => ({
        url: `${process.env.NEXT_PUBLIC_LiveBaseUrl}${route}`,
        lastModified: new Date().toISOString()
    }));

    return routeSiteMaps;
}