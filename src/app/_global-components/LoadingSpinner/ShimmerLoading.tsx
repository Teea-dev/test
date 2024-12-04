import React, { memo, useId } from 'react';

interface PropsType {
    cType?: 'invert' | 'default'
}

function ShimmerLoading({ cType = 'default' }: PropsType) {
    const rId = useId();
    const gId = useId();
    const c = cType === 'invert' ? ['#222', '#333'] : ['#333', '#222']


    return (
        <svg width={'100%'} height={'100%'} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient id={gId}>
                    <stop stopColor={c[0]} offset="20%" />
                    <stop stopColor={c[1]} offset="50%" />
                    <stop stopColor={c[0]} offset="70%" />
                </linearGradient>
            </defs>
            <rect width={'100%'} height={'100%'} fill={c[0]} />
            <rect
                id={rId}
                width={'100%'}
                height={'100%'}
                fill={`url(#${gId})`}
            />
            <animate xlinkHref={`#${rId}`} attributeName="x" from={`-100%`} to={'100%'} dur="2s" repeatCount="indefinite" />
        </svg>
    )
}

export default memo(ShimmerLoading);