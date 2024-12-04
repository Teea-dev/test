

import React from 'react';
import s from './VideoCardLoadingShimmer.module.scss'
import { ShimmerLoading } from '@/app/_global-components/LoadingSpinner';
import CardVideoPlayerShimmer from '@/app/_global-components/VideoPlayer/CldVideoPlayer/CardVideoLoadingShimmer';

function VideoCardLoadingShimmer() {
    return (
        <CardVideoPlayerShimmer
            dimensionType='shineCardDimension'
            videoInfoClassName={s.videoInfoWrapper}
        >
            <div className={s.videoInfoContainer}>
                <ShimmerLoading cType='invert' />
            </div>
        </CardVideoPlayerShimmer>
    )
}

export default VideoCardLoadingShimmer;