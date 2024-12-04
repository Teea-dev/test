import React from 'react';
import s from './legalCenter.module.scss';
import cn from 'clsx';
import Link from 'next/link';
import { CommunityUsersIcon, NotePlusIcon, NotebookIcon, PrivacyIcon } from '@/app/_global-components/icons';
import { Metadata } from 'next';
import getPageDefaultMetadata from '@/utils/metadataChunks/getPageDefaultMetadata';

export type LegalCenterSubRoutePages = 'TermsOfService' | 'PrivacyPolicy' | 'CommunityGuidelines' | 'AdditionalTerms'

function page() {
    return (
        <div className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.container}>
                <div className={s.heading}>
                    <h1>Laws of the galaxy</h1>
                    <p>Like the Milky Way, StarzFi is guided by a system of laws to maintain balance and keep starz shining all day, everyday.</p>
                </div>
                <div className={s.navLinks}>
                    <Link href='/legal-center/terms-of-service'>
                        <NotebookIcon />
                        <h3>Terms of service</h3>
                        <p>StarzFi policies and conditions of use for all the starz, creators and clients alike.</p>
                    </Link>
                    <Link href='/legal-center/privacy-policy'>
                        <PrivacyIcon />
                        <h3>Privacy policy</h3>
                        <p>Details of StarzFi’s lawful recognition, usage and protection of your data.</p>
                    </Link>
                    <Link href='/legal-center/community-guidelines'>
                        <CommunityUsersIcon />
                        <h3>Community guidelines</h3>
                        <p>While we expect everyone on StarzFi to shine as bright as they want, our codes of conduct maintain an ideal heaven for all starz.</p>
                    </Link>
                    <Link href='/legal-center/additional-terms'>
                        <NotePlusIcon />
                        <h3>Additional terms</h3>
                        <p>Other specifications regarding the integrity of the StarzFi galaxy.</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page;


const title = 'Legal Center';
const description = `Laws of the galaxy, Like the Milky Way, StarzFi is guided by a system of laws to maintain balance and keep starz shining all day, everyday.`;

export const metadata: Metadata = getPageDefaultMetadata(title, description, '/legal-center');