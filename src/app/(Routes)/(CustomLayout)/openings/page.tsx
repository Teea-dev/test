
import React from 'react';
import s from './page.module.scss';
import cn from 'clsx';
import NavigateBackBtn from '@/app/_global-components/NavigateBackBtn';
import JobOpeningCard from './_JobOpeningCard';
import { Metadata } from 'next';
import getPageDefaultMetadata from '@/utils/metadataChunks/getPageDefaultMetadata';
import careersApiInstance from '@/fetchEndpoints/careers/serverFetchApi';
import { CareersDataType } from '@/fetchEndpoints/careers/types';

async function page() {
    const res = await careersApiInstance.getAll<CareersDataType[]>();

    return (
        <div className={cn(s.wrapper)}>
            <NavigateBackBtn />
            <div className={cn('layout-block-inner', s.container)}>
                <div className={s.openingContainer}>
                    <h1>Current Job openings</h1>
                    <div className={s.openingJobs}>
                        {
                            res.isError ?
                                <p className={s.error}>An Error Occurred while trying to fetch this resource, please try again later</p>
                                : res.resData?.data.length === 0 ?
                                    <p className={s.empty}>There are no Job openings at this time, check back later</p>
                                    :
                                    res.resData?.data.map(job => (
                                        <JobOpeningCard key={job._id} data={job} />
                                    ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;


const title = 'Openings';
const description = `See current Job openings and be among our starz in the orbit`;

export const metadata: Metadata = getPageDefaultMetadata(title, description, '/openings');