'use client';
import React, { ReactNode, CSSProperties, useRef, Children } from 'react';
import s from './carousel.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';
import cn from 'clsx';
import { useIsomorphicLayoutEffect } from '@/customHooks';
import UiAnimations from './uiAnimations';
import { useMedia } from 'react-use';

/* 
-- Descriptions --
* This is a content Carousel used to display the video card posts on the website

-- Params --
* children: React Components passed as children to the carousel;

* wrapperClassName: classname for the carousel wrapper;

* wrapperStyle: inline styles for the cariusel wrapper;

* slidePerContent: Number of content the carousel should slide by, e.g if a content width is 200px and slidePerContent is 2, then on each slide the carousel will slide by 400px (200px * 2);

navArrowLocation: Where to place the carousel NavArrow, place on top the carousel Wrapper or outside carousel Wrapper
*/

interface PropTypes {
    children: ReactNode,
    wrapperClassName?: string,
    wrapperStyle?: CSSProperties,
    slidePerContent?: number,
    navArrowLocation?: 'inside' | 'outside'
}

function Carousel({
    children,
    wrapperClassName = '',
    wrapperStyle = {},
    slidePerContent = 1,
    navArrowLocation = 'inside'
}: PropTypes) {
    const isDesktop = useMedia('(min-width: 800px)', true);
    const arrayChildren = Children.toArray(children)
    const uiAnimation = useRef<UiAnimations | null>(null);
    const carouselWrapperRef = useRef<HTMLDivElement | null>(null);
    const sliderWrapperRef = useRef<HTMLUListElement | null>(null);
    const navRightRef = useRef<HTMLButtonElement | null>(null);
    const navLeftRef = useRef<HTMLButtonElement | null>(null);


    const NavArrows =
        <>
            <button ref={navLeftRef} className={cn(s.navBtn, s.navLeft)}>
                <ArrowLeftIcon inheritColor width={15} height={15} />
            </button>
            <button ref={navRightRef} className={cn(s.navBtn, s.navRight)}>
                <ArrowRightIcon inheritColor width={15} height={15} />
            </button>
        </>


    useIsomorphicLayoutEffect(() => {
        if (
            !navLeftRef.current ||
            !navRightRef.current ||
            !sliderWrapperRef.current ||
            !carouselWrapperRef.current
        ) return;

        uiAnimation.current = new UiAnimations({
            styles: s,
            navArrowLocation,
            navRightBtn: navRightRef.current,
            navLeftBtn: navLeftRef.current,
            carouselWrapper: carouselWrapperRef.current,
            sliderWrapper: sliderWrapperRef.current,
            slidePerContent: slidePerContent,
        })

        uiAnimation.current.init();

        return () => {
            if (uiAnimation.current) uiAnimation.current.dispose();
        }
    }, [])

    useIsomorphicLayoutEffect(() => {
        if (!uiAnimation.current) return;

        uiAnimation.current.responsive(isDesktop);
    }, [isDesktop])

    return (
        <div className={s.outerWrapper} style={{ overflow: 'hidden' }}>
            {
                navArrowLocation === 'outside' &&
                <div className={s.outerNavArrows}>
                    {NavArrows}
                </div>
            }


            <div ref={carouselWrapperRef} style={wrapperStyle} className={`${s.wrapper} ${wrapperClassName}`}>
                <ul ref={sliderWrapperRef}>
                    {Children.map(arrayChildren, child => <li className={s.slideItem}>{child}</li>)}
                </ul>
                {navArrowLocation === 'inside' && NavArrows}

            </div>
        </div>

    )
}

export default Carousel