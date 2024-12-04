import React from 'react';
import s from './forCelebrities.module.scss';
import HeroSection from './_local-components/HeroSection';
import EnjoyMultiplePerksSection from './_local-components/EnjoyMultiplePerksSection';
import JoinCelebritySection from './_local-components/JoinCelebritySection';
import SectionTemplate from './_local-components/SectionTemplate';
import GetPaidInChoiceCurrencySection from './_local-components/GetPaidInChoiceCurrencySection';
import DownloadStarfiSection from '@/app/_global-components/DownloadStarfiSection';
import FrequestlyAskedQuestionSection from '@/app/_global-components/FrequestlyAskedQuestionSection';
import { Metadata } from 'next';
import getPageDefaultMetadata from '@/utils/metadataChunks/getPageDefaultMetadata';

function page() {
    return (
        <div className={s.wrapper}>
            <HeroSection />
            <EnjoyMultiplePerksSection />
            <JoinCelebritySection />
            <SectionTemplate
                imgSrc='/imgs/joinCeleb/tempSec1.webp'
                heading='Create for local and global audiences'
                subHeading='Make content for anyone, anywhere, anytime.'
                link={{
                    href: '/download',
                    text: 'Get started'
                }}
            />
            <SectionTemplate
                flip='Odd'
                imgSrc='/imgs/joinCeleb/tempSec2.webp'
                heading='Set prices according to your value'
                subHeading='You decide what your work is worth.'
                link={{
                    href: '/download',
                    text: 'Get started'
                }}
            />
            <GetPaidInChoiceCurrencySection />
            <DownloadStarfiSection />
            <FrequestlyAskedQuestionSection />
        </div>
    )
}

export default page;

const title = 'For Celebrities';
const description = `Create content that pays…literally, our user-friendly experience is an effortless way to produce and earn on StarzFi, while making your fans very happy in the process.`;

export const metadata: Metadata = getPageDefaultMetadata(title, description, '/for-celebrities');