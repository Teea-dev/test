import React from 'react';
import s from './seamlessTransactionSection.module.scss';
import cn from "clsx";
import NextImageShimmer from '@/app/_global-components/NextImageShimmer';

function SeamlessTransactionSection() {
    return (
        <div className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.container}>
                <div className={s.heading}>
                    <h2>Seamless transaction processes</h2>
                    <p>Whether in pounds, dollars or euros, foreign exchange transactions occur automatically and instantly.</p>
                </div>
                <div className={s.contentWrapper}>
                    <div className={s.contentImg}>
                        <NextImageShimmer
                            src={"/imgs/seamlessTrans.webp"}
                            alt='thumb-nail'
                            fill
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            priority
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className={s.contentText}>
                        <div>
                            <h3>Receive</h3>
                            <p>You can fund wallet, get paid, manage account and earnings in your choice currency.</p>
                        </div>
                        <div>
                            <h3>Pay</h3>
                            <p>Make quick global money transfers to other Starz, even if they don&apos;t use the same currency.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SeamlessTransactionSection;