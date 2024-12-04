'use client';
import React, { CSSProperties, ComponentPropsWithoutRef } from 'react'
import { ColorRing } from 'react-loader-spinner';
import scssVar from '@/base-styles/_exportValues.module.scss';

interface PropsType extends ComponentPropsWithoutRef<typeof ColorRing> {
    width?: string,
    height?: string,
    parentWrapperStyle?: CSSProperties
}

function ContentLoadingSpinner({
    width = '80',
    height = '80',
    parentWrapperStyle = {},
    ...rest
}: PropsType) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                ...parentWrapperStyle
            }}>
            <ColorRing
                visible={true}
                height={height}
                width={width}
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
                colors={[scssVar.primary, scssVar.primary, scssVar.primary, scssVar.primary, scssVar.primary]}
                {...rest}
            />
        </div>
    )
}

export default ContentLoadingSpinner