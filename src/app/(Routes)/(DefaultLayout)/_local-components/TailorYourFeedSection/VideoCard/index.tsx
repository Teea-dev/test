
import { CldVideoPlayer } from '@/app/_global-components/VideoPlayer';
import s from './videoCard.module.scss';
import React from 'react';
import { TailorFeedDataType } from '@/fetchEndpoints/posts/types';

interface PropsType {
    feed: TailorFeedDataType
}

function VideoCard({ feed }: PropsType) {
    return (
        <CldVideoPlayer
            src={feed.video}
            dimensionType='TailorFeedDimension'
            showCustomControls={false}
            wrapperClassName={s.videoCard}
            videoInfoClassName={s.videoInfoWrapper}
            showProgressBar={false}
            playerOptions={{
                loop: true,
                muted: true
            }}
        >
            <div className={s.videoInfoContainer}>
                {feed.interest}
            </div>
        </CldVideoPlayer>
    )
}

export default VideoCard;