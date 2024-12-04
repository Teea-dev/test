'use client';
import React, { useRef } from 'react';
import s from './heroSection.module.scss';
import cn from 'clsx';
import { LinkButton as PrimaryButton } from '@/app/_global-components/PrimaryButton'
import NextImageShimmer from '@/app/_global-components/NextImageShimmer';
import { useGsapContext, useIsomorphicLayoutEffect } from '@/customHooks';
import UiAnimations from './uiAnimations';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HeroSection() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const ctx = useGsapContext(wrapperRef);
    const animationsEffect = useRef<UiAnimations | null>(null);

    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animationsEffect.current = new UiAnimations(ctx, s);

        animationsEffect.current.init()

        return () => { // clean up
            ctx.revert();
            if (animationsEffect.current) animationsEffect.current.dispose()
        };
    }, [ctx]);

    return (
        <div ref={wrapperRef} className={cn('layout-block', s.wrapper)}>
            <div className={s.container}>
                <div className={s.imgWrapper}>
                    <span>
                        <NextImageShimmer
                            src={'/imgs/joinTheTeam/heroSec.webp'}
                            fill
                            alt={`content image`}
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </span>

                </div>
                <div className={s.content}>
                    <h1>StarzFi needs all its Starz to stay in orbit</h1>
                    <p>Wondering if there&apos;s a place for you backstage?</p>
                    <PrimaryButton
                        btnType={'Outline'}
                        href={'/openings'}
                        className={s.btn}
                    >
                        See open positions
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;