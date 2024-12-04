import React from 'react';
import s from './wordsFromOurStarzSection.module.scss';
import cn from 'clsx';

function WordsFromOurStarzSection() {
    return (
        <div className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.container}>
                <h2>Word from other starz</h2>
                <div className={s.testimonies}>
                    <div>
                        <h3>Stephanie Coker</h3>
                        <p>This is so much better than I could have hoped for. Thank you so much for taking the time to personalize it and knock it out of the park. Couldn&apos;t be happier!</p>
                    </div>
                    <div>
                        <h3>Miles Derin</h3>
                        <p>We cannot thank you enough! Sophie was beyond thrilled to get your message and it really helped her get through a little bit of missing home!</p>
                    </div>
                    <div>
                        <h3>Akeela Bee</h3>
                        <p>This is so much better than I could have hoped for. Thank you so much for taking the time to personalize it and knock it out of the park. Couldn&apos;t be happier!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordsFromOurStarzSection