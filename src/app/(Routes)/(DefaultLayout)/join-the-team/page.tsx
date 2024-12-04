import React from 'react';
import s from './joinTheTeam.module.scss';
import HeroSection from './_local-components/HeroSection';
import OurValuesAndStorySection from './_local-components/OurValuesAndStorySection';
import JoinTeamSection from './_local-components/JoinTeamSection';
import { Metadata } from 'next';
import getPageDefaultMetadata from '@/utils/metadataChunks/getPageDefaultMetadata';

function page() {
    return (
        <div className={s.wrapper}>
            <HeroSection />
            <OurValuesAndStorySection />
            <JoinTeamSection />
        </div>
    )
}

export default page;


const title = 'Join The Team';
const description = `StarzFi needs all its Starz to stay in orbit, wondering if there's a place for you backstage?`;

export const metadata: Metadata = getPageDefaultMetadata(title, description, '/join-the-team');