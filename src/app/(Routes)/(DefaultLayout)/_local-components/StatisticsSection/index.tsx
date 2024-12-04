'use client';
import React from 'react';
import s from './statisticsSection.module.scss';
import NextImageShimmer from '@/app/_global-components/NextImageShimmer';
import cn from 'clsx';
import CountUp from 'react-countup';

const stats = [
    {
        img: '/imgs/ellipse1.webp',
        statNum: 1000000,
        text: 'Happy users',
        statId: 'happyUsers',
        finalDisplay: '1M'
    },
    {
        img: '/imgs/ellipse2.webp',
        statNum: 730000,
        text: 'Featured celebrities',
        statId: 'featuresCeleb'
    },
    {
        img: '/imgs/ellipse3.webp',
        statNum: 183,
        text: 'Countries',
        statId: 'countries'
    },
    {
        img: '/imgs/ellipse4.webp',
        statNum: 632000,
        text: 'StarzFi-made millionaires',
        statId: 'starFiMademill'
    },
]

function StatisticsSection() {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                {
                    stats.map((stat, i) => (
                        <div key={stat.text} className={s.stats}>
                            <span className={cn(i % 2 === 0 ? s.imgEven : s.imgOdd)}>
                                <NextImageShimmer
                                    src={stat.img}
                                    fill
                                    alt={`${stat.text} image`}
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </span>
                            <CountUp
                                end={stat.statNum}
                                duration={5}
                                enableScrollSpy
                                scrollSpyOnce
                                suffix='+'
                                onEnd={() => {
                                    if (!stat.finalDisplay) return;
                                    const el = document.getElementById(stat.statId) as HTMLElement;
                                    el.innerText = stat.finalDisplay;
                                }}
                            >
                                {({ countUpRef }) => (
                                    <>
                                        <h3 id={stat.statId} ref={countUpRef as any}>0000+</h3>
                                    </>
                                )}
                            </CountUp>

                            <p>{stat.text}</p>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default StatisticsSection;