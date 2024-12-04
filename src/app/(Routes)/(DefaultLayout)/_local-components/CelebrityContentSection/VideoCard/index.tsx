import { CldVideoPlayer } from '@/app/_global-components/VideoPlayer';
import s from './videoCard.module.scss';
import React from 'react'
import { VerifiedCheckIcon } from '@/app/_global-components/icons';
import { CelebritiesDataType } from '@/fetchEndpoints/posts/types';

interface PropsType {
    post: CelebritiesDataType
}

function VideoCard({ post }: PropsType) {

    return (
        <CldVideoPlayer
            src={post.video}
            dimensionType='celebrityCardDimension'
        >
            <div className={s.videoInfoContainer}>
                <div>
                    <h3>{post.handle}</h3>
                    <VerifiedCheckIcon />
                </div>
                <p>{post.caption}</p>
            </div>
        </CldVideoPlayer>
    )
}

export default VideoCard;