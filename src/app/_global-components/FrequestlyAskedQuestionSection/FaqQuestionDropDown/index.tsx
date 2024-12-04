'use client';
import React from 'react';
import s from './faqQuestionDropDown.module.scss';
import { ArrowRightIcon } from '../../icons';
import gsap from 'gsap'
import { FaqDataType } from '@/fetchEndpoints/faqs/types';

interface PropsType {
    data: FaqDataType
}

function FaqQuestionDropDown({ data }: PropsType) {

    // Handle QuestionAndAnswer Component 'answer' dropdown Animation
    const openAnswer = (id: string) => {
        const clickedwrapper = document.getElementById(id) as HTMLDivElement
        const currentOpenedWrapper = document.querySelector(`[data-is-open="true"]`) as HTMLDivElement | null;

        const currentOpenedAnswer = currentOpenedWrapper?.querySelector(`.${s.faqAnswer}`) as HTMLDivElement;
        const clickedAnswer = clickedwrapper.querySelector(`.${s.faqAnswer}`) as HTMLDivElement;

        const clickedArrowDownSvg = clickedwrapper.querySelector('svg');
        const currentOpenedArrowDownSvg = currentOpenedWrapper?.querySelector('svg');

        const tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power3.inOut' } });

        if (!currentOpenedWrapper) { // No Faq is currently Opened, open clicked Faq
            tl.to(
                clickedAnswer,
                {
                    height: 'auto',
                    marginBottom: "10px"
                },
                'same'
            ).to(
                clickedArrowDownSvg,
                {
                    rotate: '90deg'
                },
                'same'
            ).then(() => {
                clickedwrapper.setAttribute('data-is-open', 'true');
            })
        } else if (currentOpenedWrapper === clickedwrapper) { // User clicked on already opned Faq, so close it
            tl.to(
                clickedAnswer,
                {
                    height: '0px',
                    marginBottom: '0px',
                    duration: 0.3,
                    ease: 'power3.inOut'
                },
                'same'
            ).to(
                clickedArrowDownSvg,
                {
                    rotate: '0deg'
                },
                'same'
            ).then(() => {
                clickedwrapper.setAttribute('data-is-open', 'false');
            })
        } else { // User clicked on a new Faq, so close the former and open the newly clicked Faq

            tl.to(
                currentOpenedAnswer,
                {
                    height: '0px',
                    marginBottom: '0px',
                    duration: 0.3,
                    ease: 'power3.inOut'
                },
                'same'
            ).to(
                clickedAnswer,
                {
                    height: 'auto',
                    marginBottom: "10px",
                    duration: 0.3,
                    ease: 'power3.inOut'
                },
                'same'
            ).to(
                clickedArrowDownSvg,
                {
                    rotate: '90deg'
                },
                'same'
            ).to(
                currentOpenedArrowDownSvg!,
                {
                    rotate: '0deg'
                },
                'same'
            ).then(() => {
                currentOpenedWrapper.setAttribute('data-is-open', 'false');
                clickedwrapper.setAttribute('data-is-open', 'true');
            })
        }


    }
    return (
        <li className={s.wrapper} data-is-open='false' id={data._id}>
            <button onClick={() => openAnswer(data._id)} className={s.faqQuestion}>
                <ArrowRightIcon />
                <p>{data.question}</p>
            </button>

            <div className={s.faqAnswer}>
                {data.answer}
            </div>
        </li>
    )
}

export default FaqQuestionDropDown