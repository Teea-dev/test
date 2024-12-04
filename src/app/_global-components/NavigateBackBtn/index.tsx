'use client'

import { useRouter } from 'next/navigation'
import React from 'react';
import s from './navigateBackBtn.module.scss';
import cn from 'clsx';
import { ArrowLeftIcon } from '../icons';

function NavigateBackBtn() {
    const router = useRouter();
    return (
        <div onClick={() => router.back()} className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.container}>
                <ArrowLeftIcon />
                <p>Back</p>
            </div>
        </div>
    )
}

export default NavigateBackBtn