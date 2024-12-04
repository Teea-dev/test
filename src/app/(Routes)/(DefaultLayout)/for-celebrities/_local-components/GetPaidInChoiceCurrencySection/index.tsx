import React from 'react';
import s from './getPaidInChoiceCurrencySection.module.scss';
import cn from 'clsx';
import NextImageShimmer from '@/app/_global-components/NextImageShimmer';

function GetPaidInChoiceCurrencySection() {
    return (
        <div className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.container}>
                <h2>Get paid in your choice currency</h2>
                <div className={s.content}>
                    <div className={s.contentImgWrapper}>
                        <span className={s.contentImg}>
                            <NextImageShimmer
                                src={'/imgs/joinCeleb/feed1.webp'}
                                fill
                                alt={`celebrity image`}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </span>
                    </div>

                    <p>
                        Create and manage different wallets for different currencies.
                        <br />
                        <br />
                        Withdraw from StarzFi to a local bank account in no time.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetPaidInChoiceCurrencySection;