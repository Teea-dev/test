import React from 'react';
import s from './JoinCelebritySection.module.scss';
import cn from 'clsx';
import NextImageShimmer from '@/app/_global-components/NextImageShimmer';


const celebInfo = [
    {
        img: '/imgs/joinCeleb/musicians.webp',
        industry: 'Musician'
    },
    {
        img: '/imgs/joinCeleb/actors.webp',
        industry: 'Actors'
    },
    {
        img: '/imgs/joinCeleb/athletes.webp',
        industry: 'Athletes'
    },
    {
        img: '/imgs/joinCeleb/comedians.webp',
        industry: 'Comedians'
    },
    {
        img: '/imgs/joinCeleb/influencers.webp',
        industry: 'Influencers'
    },
]


function JoinCelebritySection() {
    return (
        <div className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.container}>
                <div className={s.heading}>
                    <h2>JoinCelebritySection</h2>
                    <p>Fans want to connect with all their favourite starz. Yes! You too.</p>
                </div>
                <div className={s.celebsWrapper}>
                    <div className={s.celebsContainer}>
                        {
                            celebInfo.map((info, i) => (
                                <div key={`${i}-${info.industry}`}>
                                    <span>
                                        <NextImageShimmer
                                            src={info.img}
                                            fill
                                            alt={`celebrity image`}
                                            style={{ objectFit: 'cover' }}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </span>
                                    <p>{info.industry}</p>
                                </div>
                            ))
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}

export default JoinCelebritySection;