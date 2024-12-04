import React from 'react';
import cn from 'clsx';
import s from './primaryButton.module.scss';
import dynamic from 'next/dynamic';

const ContentLoadingSpinner = dynamic(() => import('../LoadingSpinner/ContentLoadingSpinner'))

interface PropTypes extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    btnType?: 'Filled' | 'Outline',
    isLoading?: boolean
}

function Button({
    btnType = 'Filled',
    className,
    children,
    disabled,
    isLoading = false,
    ...rest
}: PropTypes) {
    return (
        <button
            disabled={disabled}
            className={cn(
                s.wrapper,
                className,
                s[btnType],
                disabled && s.isDisabled,
                isLoading && s.isLoading
            )}
            {...rest}
        >
            {isLoading && <ContentLoadingSpinner
                height='20'
                width='20'
                colors={['white', 'white', 'white', 'white', 'white']}
            />}

            {children}
        </button>
    )
}

export default Button;