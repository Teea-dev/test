'use client';
import React, { useRef } from 'react';
import s from './ourValuesAndStorySection.module.scss';
import cn from 'clsx';
import { LinkButton as PrimaryButton } from '@/app/_global-components/PrimaryButton';
import { useGsapContext, useIsomorphicLayoutEffect } from '@/customHooks';
import UiAnimations from './uiAnimations';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


function OurValuesAndStorySection() {
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
                <div className={s.ourValuesVisionMission}>
                    <div>
                        <h3>Our values</h3>
                        <p>
                            We’re intentional about solving problems – for our customers, talent, brands, and teammates.
                            <br />
                            <br />
                            We embrace simplicity - Complication is the enemy of scale. We keep our processes simple and our minds clear.
                            <br />
                            <br />
                            We take pride in our work – not just in our successes but in our failures because we learn even more from those.
                            We create unforgettable experiences.
                        </p>
                    </div>
                    <div>
                        <h3>Our vision</h3>
                        <p>
                            We’re in the business of unforgettable experiences. Whether it’s fans screaming and crying, a talent feeling the love, or a brand wowing their customers.
                            <br />
                            <br />
                            We want to ensure that anyone using our platform, or comes across our website would have an amazing experience, all-round.
                        </p>
                    </div>
                    <div>
                        <h3>Our mission</h3>
                        <p>
                            Our mission is to create the most personalized and authentic fan experiences on earth.
                        </p>
                    </div>
                </div>
                <div className={s.ourStory}>
                    <div>
                        <h2>
                            Our success story
                        </h2>
                        <p>Be a part of it by signing up on StarzFi if you haven&apos;t</p>
                    </div>
                    <PrimaryButton className={s.btn} href={'/'}>Join the starz</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default OurValuesAndStorySection