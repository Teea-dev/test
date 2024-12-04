import React from 'react';
import s from './joinTeamSection.module.scss';
import cn from 'clsx';
import { LinkButton as PrimaryButton } from '@/app/_global-components/PrimaryButton';
import NextImageShimmer from '@/app/_global-components/NextImageShimmer';

function JoinTeamSection() {
    return (
        <div className={cn('layout-block', s.wrapper)}>
            <div className={s.container}>
                <div className={s.joinTeam}>
                    <div>
                        <h2>Join the starzFi team</h2>
                        <p>Find your spot in our universe.</p>
                    </div>
                    <PrimaryButton
                        className={s.btn}
                        btnType='Outline'
                        href={"/openings"}>
                        See open positions
                    </PrimaryButton>
                </div>
                <div className={s.workFrom}>
                    <div className={s.text}>
                        <h2>Work wherever you’ll shine</h2>
                        <p>In this diverse and inclusive universe, starz are spread far and wide.</p>
                    </div>
                    <div className={s.imgs}>
                        <span>
                            <NextImageShimmer
                                src={'/imgs/joinTheTeam/loc1.webp'}
                                fill
                                alt={`content image`}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </span>
                        <span>
                            <NextImageShimmer
                                src={'/imgs/joinTheTeam/loc2.webp'}
                                fill
                                alt={`content image`}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinTeamSection