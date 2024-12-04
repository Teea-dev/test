import React from 'react';
import s from './frequestlyAskedQuestionSection.module.scss';
import cn from 'clsx';
import FaqQuestionDropDown from './FaqQuestionDropDown';
import faqApiInstance from '@/fetchEndpoints/faqs/serverFetchApi';
import { FaqDataType } from '@/fetchEndpoints/faqs/types';

async function FrequestlyAskedQuestionSection() {
    const res = await faqApiInstance.getAll<FaqDataType[]>();

    return (
        <div className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.container}>
                <h2>Frequently asked questions</h2>
                <ul className={s.faqQuestions}>
                    {
                        (res.isError || !res.resData?.data) ?
                            <div style={{ textAlign: 'center' }}>An Error occurred while try to fetch FAQ, please check your internet connection or try again later</div>
                            :
                            res.resData.data.map(faq => (
                                <FaqQuestionDropDown
                                    key={faq._id}
                                    data={faq}
                                />
                            ))

                    }
                </ul>
            </div>
        </div>
    )
}

export default FrequestlyAskedQuestionSection;