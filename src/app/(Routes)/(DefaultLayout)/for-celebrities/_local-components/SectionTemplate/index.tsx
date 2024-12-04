import React from 'react';
import s from './sectionTemplate.module.scss';
import cn from 'clsx';
import NextImageShimmer from '@/app/_global-components/NextImageShimmer';
import { LinkButton as PrimaryButton } from '@/app/_global-components/PrimaryButton';

interface PropTypes {
    imgSrc: string,
    heading: string,
    subHeading: string,
    flip?: 'Odd' | 'Even',
    link: {
        href: string,
        text: string
    }
}

function SectionTemplate({
    flip = 'Even',
    imgSrc,
    heading,
    subHeading,
    link
}: PropTypes) {
    return (
        <div className={cn('layout-block-inner', s.wrapper)} >
            <div className={cn(s.container, s[flip])}>
                <span className={s.imgWrappper}>
                    <NextImageShimmer
                        src={imgSrc}
                        fill
                        alt={`celebrity image`}
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </span>
                <div className={s.content}>
                    <div className={s.texts}>
                        <h3>{heading}</h3>
                        <p>{subHeading}</p>
                    </div>
                    <PrimaryButton
                        btnType='Outline'
                        href={link.href}
                        className={s.btnLink}
                    >
                        {link.text}
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default SectionTemplate;