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
                            src={'/imgs/forCelebrities/heroSec.webp'}
                            fill
                            alt={`content image`}
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </span>

                </div>
                <div className={s.content}>
                    <h1>Create content that pays…literally</h1>
                    <p>Our user-friendly experience is an effortless way to produce and earn on StarzFi, while making your fans very happy in the process.</p>
                    <PrimaryButton
                        href={'/download'}
                        className={s.btn}
                    >
                        Join the starz
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;