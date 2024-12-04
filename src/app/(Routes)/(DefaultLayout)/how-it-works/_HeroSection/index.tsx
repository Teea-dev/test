import React from 'react';
import s from './heroSection.module.scss';
import cn from 'clsx';
import { DefaultVideoPlayer as VideoPlayer } from "@/app/_global-components/VideoPlayer";

function HeroSection() {
    return (
        <div className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.container}>
                <div className={s.content}>
                    <h1>Experience exclusive content and connections</h1>
                    <p>With StarzFi, you can give and get content – for and from the people that matter.</p>
                </div>

                <div className={s.videoContainer}>
                    <VideoPlayer
                        src="https://www.youtube.com/watch?v=18srtPz1aSY"
                        title='Watch how it works'
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection