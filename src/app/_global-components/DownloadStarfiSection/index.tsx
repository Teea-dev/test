'use client';
import React, { useRef } from 'react';
import s from './downloadStarfiSection.module.scss';
import cn from 'clsx';
import NextImageShimmer from '@/app/_global-components/NextImageShimmer';
import { useGsapContext, useIsomorphicLayoutEffect } from '@/customHooks';
import gsap from 'gsap';
import UiAnimations from './uiAnimations';
import { ScrollTrigger } from "gsap/ScrollTrigger";


function DownloadStarfiSection() {
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
        <div ref={wrapperRef} className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.container}>
                <div className={s.details}>
                    <div className={s.heading}>
                        <h2>Download StarzFi</h2>
                        <p>A world-class platform for starz by starz, to make connections that matter.</p>
                    </div>
                    <div className={s.appStores}>
                        <span>
                            <NextImageShimmer
                                src={"/imgs/appStore/apple.webp"}
                                alt='thumb-nail'
                                fill
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                priority
                                style={{ objectFit: "cover" }}
                            />
                        </span>
                        <span>
                            <NextImageShimmer
                                src={"/imgs/appStore/google.webp"}
                                alt='thumb-nail'
                                fill
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                priority
                                style={{ objectFit: "cover" }}
                            />
                        </span>
                    </div>
                </div>

                <div className={s.decors} role='presentation'>
                    <span
                        className={s.decor}
                        data-anim-rotate="0deg"
                        data-anim-translate='0px 8%'
                    >
                        <NextImageShimmer
                            src={"/imgs/appStore/decor1.webp"}
                            alt='thumb-nail'
                            fill
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            priority
                            style={{ objectFit: "contain" }}
                        />
                    </span>
                    <span
                        className={s.decor}
                        data-anim-rotate="-8deg"
                        data-anim-translate='-5% 15%'
                    >
                        <NextImageShimmer
                            src={"/imgs/appStore/decor2.webp"}
                            alt='thumb-nail'
                            fill
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            priority
                            style={{ objectFit: "cover" }}
                        />
                    </span>
                    <span
                        className={s.decor}
                        data-anim-rotate="-16deg"
                        data-anim-translate='-10% 22%'
                    >
                        <NextImageShimmer
                            src={"/imgs/appStore/decor3.webp"}
                            alt='thumb-nail'
                            fill
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            priority
                            style={{ objectFit: "cover" }}
                        />
                    </span>
                    <span
                        className={s.decor}
                        data-anim-rotate="-30deg"
                        data-anim-translate='0% 27%'
                    >
                        <NextImageShimmer
                            src={"/imgs/appStore/decor4.webp"}
                            alt='thumb-nail'
                            fill
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            priority
                            style={{ objectFit: "cover" }}
                        />
                    </span>
                    <span
                        className={s.decor}
                        data-anim-rotate="-40deg"
                        data-anim-translate='10% 33%'
                    >
                        <NextImageShimmer
                            src={"/imgs/appStore/decor5.webp"}
                            alt='thumb-nail'
                            fill
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            priority
                            style={{ objectFit: "cover" }}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DownloadStarfiSection;