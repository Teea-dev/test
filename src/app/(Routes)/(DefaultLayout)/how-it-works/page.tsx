import React from 'react';
import s from './howItWorks.module.scss';
import HeroSection from './_HeroSection';
import DownloadStarfiSection from '@/app/_global-components/DownloadStarfiSection';
import FrequestlyAskedQuestionSection from '@/app/_global-components/FrequestlyAskedQuestionSection';
import { Metadata } from 'next';
import getPageDefaultMetadata from '@/utils/metadataChunks/getPageDefaultMetadata';

function page() {
    return (
        <div className={s.wrapper}>
            <HeroSection />
            <DownloadStarfiSection />
            <FrequestlyAskedQuestionSection />
        </div>
    )
}

export default page;


const title = 'How It Works';
const description = `Experience exclusive content and connections, with StarzFi, you can give and get content – for and from the people that matter.`;

export const metadata: Metadata = getPageDefaultMetadata(title, description, '/how-it-works');