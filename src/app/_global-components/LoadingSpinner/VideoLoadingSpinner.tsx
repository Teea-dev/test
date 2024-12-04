'use client';
import React, { CSSProperties, ComponentPropsWithoutRef } from 'react'
import { RotatingLines } from 'react-loader-spinner';
import scssVar from '@/base-styles/_exportValues.module.scss';

interface PropsType extends ComponentPropsWithoutRef<typeof RotatingLines> {
    wrapperStyle?: CSSProperties
}


function VideoLoadingSpinner({
    wrapperStyle = {},
    ...rest
}: PropsType) {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...wrapperStyle
        }}>
            <RotatingLines
                width='96'
                strokeWidth="4"
                animationDuration="0.75"
                strokeColor={scssVar.primary}
                {...rest}
            />
        </div>
    )
}

export default VideoLoadingSpinner