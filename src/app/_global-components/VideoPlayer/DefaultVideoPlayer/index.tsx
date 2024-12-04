'use client';
import React from 'react';
import s from './defaultVideoPlayer.module.scss';
import type { CSSProperties, ComponentPropsWithoutRef } from 'react';
import dynamic from 'next/dynamic';
import { withErrorBoundary } from 'react-error-boundary'
import { PlayIcon } from '@/app/_global-components/icons';
import { VideoLoadingSpinner as LoadingSpinner } from '@/app/_global-components/LoadingSpinner';

/* 
-- Description --
* This Component wraps and uses ReactPlayer package to play other types of video needed.
* check docs: https://www.npmjs.com/package/react-player

*/


const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

interface PropsTypes extends ComponentPropsWithoutRef<typeof ReactPlayer> {
    src: string,
    className?: string,
    wrapperStyle?: CSSProperties,
    innerStyle?: CSSProperties,
    width?: string,
    height?: string,
}

function VideoPlayer({
    className = '',
    wrapperStyle = {},
    innerStyle = {},
    width = "100%",
    height = "100%",
    src,
    ...props
}: PropsTypes) {


    const PlayIconComponent = () => {
        return (
            <span className={s.previewPlayIcon}>
                <PlayIcon width={40} height={40} color='white' />
            </span>
        )
    }

    return (
        <div style={wrapperStyle} className={`${s.wrapper} ${className}`}>
            <ReactPlayer
                pip
                light
                controls
                playsinline
                style={innerStyle}
                width={width}
                playIcon={<PlayIconComponent />}
                height={height}
                url={src}
                fallback={<LoadingSpinner />}
                {...props}
            />
        </div>
    )
}

export default withErrorBoundary<PropsTypes>(VideoPlayer, {
    fallbackRender: (props) => <div>Error Boundary Dummy</div>
}) 