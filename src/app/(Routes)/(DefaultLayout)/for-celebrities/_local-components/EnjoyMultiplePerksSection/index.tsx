import React from 'react';
import s from './enjoyMultiplePerksSection.module.scss';
import cn from 'clsx';

function EnjoyMultiplePerksSection() {
    return (
        <div className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.container}>
                <h2>Enjoy multiple perks</h2>
                <div className={s.perks}>
                    <p>Easy monetisation.</p>
                    <p>Accessible payment solutions.</p>
                    <p>Advanced engagement options.</p>
                    <p>…and more.</p>
                </div>
            </div>
        </div>
    )
}

export default EnjoyMultiplePerksSection