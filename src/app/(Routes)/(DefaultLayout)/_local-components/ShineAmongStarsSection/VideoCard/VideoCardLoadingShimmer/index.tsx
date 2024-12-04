

import React from 'react';
import s from './VideoCardLoadingShimmer.module.scss'
import { ShimmerLoading } from '@/app/_global-components/LoadingSpinner';
import CardVideoPlayerShimmer from '@/app/_global-components/VideoPlayer/CldVideoPlayer/CardVideoLoadingShimmer';

function VideoCardLoadingShimmer() {
    return (
        <CardVideoPlayerShimmer dimensionType='shineCardDimension'>
            <div className={s.videoInfoContainer}>
                <div className={s.imgShimmer}>
                    <ShimmerLoading
                        cType='invert'
                    />
                </div>

                <div className={s.vidContentShimmers}>
                    <ShimmerLoading
                        cType='invert'
                    />
                    <ShimmerLoading
                        cType='invert'
                    />
                </div>

            </div>
        </CardVideoPlayerShimmer>
    )
}

export default VideoCardLoadingShimmer;