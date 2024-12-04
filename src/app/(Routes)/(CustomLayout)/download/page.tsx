import DownloadStarfiSection from '@/app/_global-components/DownloadStarfiSection'
import React from 'react';
import s from './page.module.scss';
import cn from 'clsx';
import NavigateBackBtn from '@/app/_global-components/NavigateBackBtn';
import { Metadata } from 'next';
import getPageDefaultMetadata from '@/utils/metadataChunks/getPageDefaultMetadata';

function page() {
    return (
        <div className={cn(s.wrapper)}>
            <div className={s.container}>
                <NavigateBackBtn />
                <DownloadStarfiSection />
            </div>
        </div>
    )
}

export default page;


const title = 'Download';
const description = `Download our apps and experience exclusive entertainment like never before`;

export const metadata: Metadata = getPageDefaultMetadata(title, description, '/download');