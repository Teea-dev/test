'use client';
import React from 'react';
import s from './cardVideoLoadingShimmer.module.scss';
import cn from 'clsx'
import { ShimmerLoading } from '@/app/_global-components/LoadingSpinner';

interface PropTypes {
    children?: React.ReactNode,
    wrapperClassName?: string,
    videoInfoClassName?: string,
    dimensionType: 'shineCardDimension' | 'celebrityCardDimension' | 'TailorFeed'
}

function CardVideoPlayerShimmer({
    children = null,
    wrapperClassName = '',
    videoInfoClassName = '',
    dimensionType,
}: PropTypes) {


    return (
        <div className={cn(s.wrapper, s[dimensionType], wrapperClassName)}>
            <div className={s.overLayShimmer}>
                <ShimmerLoading />
            </div>

            <div className={cn(s.videoInfoWrapper, videoInfoClassName)}>
                {children}
            </div>
        </div>
    )
}

export default CardVideoPlayerShimmer;