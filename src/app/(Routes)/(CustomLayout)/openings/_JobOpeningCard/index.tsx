'use client';
import React from 'react';
import s from './jobOpeningCard.module.scss';
import { ArrowRightIcon, ClockIcon, LocationIcon, } from '@/app/_global-components/icons';
import { LinkButton as PrimaryButton } from '@/app/_global-components/PrimaryButton';
import { CareersDataType } from '@/fetchEndpoints/careers/types';


interface PropsType {
    data: CareersDataType
}

function JobOpeningCard({ data }: PropsType) {
    return (
        <div className={s.wrapper}>
            <div className={s.jobDetails}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>

                <div>
                    <p>
                        <LocationIcon />
                        <span>{data.location}</span>
                    </p>
                    <p>
                        <ClockIcon />
                        <span>{data.type}</span>
                    </p>
                </div>
            </div>

            <PrimaryButton href={`mailto:starzfi.inc@gmail.com`} className={s.applyBtn}>
                <div>
                    <p>Apply</p>
                    <ArrowRightIcon />
                </div>
            </PrimaryButton>

        </div>
    )
}

export default JobOpeningCard;