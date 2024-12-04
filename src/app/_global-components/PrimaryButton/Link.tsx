import React, { ComponentPropsWithRef } from 'react';
import cn from 'clsx';
import s from './primaryButton.module.scss';
import Link from 'next/link';

interface PropTypes extends ComponentPropsWithRef<typeof Link> {
    btnType?: 'Filled' | 'Outline'
}

function LinkButton({
    btnType = 'Filled',
    className,
    children,
    ...rest
}: PropTypes) {
    return (
        <>
            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className={s.svgFilters}>
                <defs>
                    <filter id="filter-goo-1">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg> */}
            <Link className={cn(s.wrapper, className, s[btnType])} {...rest}>
                {children}
                {/* <span className={s.button__container}>
                    <span className={cn(s.circle, s.topLeft)} style={{ transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)" }}></span>
                    <span className={cn(s.circle, s.topLeft)} style={{ transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)" }}></span>
                    <span className={cn(s.circle, s.topLeft)} style={{ transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)" }}></span>
                    <span className={s.button__bg}></span>
                    <span className={cn(s.circle, s.bottomRight)} style={{ transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)" }}></span>
                    <span className={cn(s.circle, s.bottomRight)} style={{ transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)" }}></span>
                    <span className={cn(s.circle, s.bottomRight)} style={{ transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)" }}></span>
                </span> */}
            </Link>
        </>

    )
}

export default LinkButton;