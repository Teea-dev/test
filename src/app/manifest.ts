import { MetadataRoute } from 'next';
import scssVar from '@/base-styles/_exportValues.module.scss'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'StarzFi Website',
        short_name: 'StarzFi',
        description: 'StarzFi is social media where its users can creat, curate and post photos, videos and other special digital content.',
        start_url: '/',
        display: 'browser',
        background_color: scssVar.primary,
        theme_color: scssVar.primary,
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}