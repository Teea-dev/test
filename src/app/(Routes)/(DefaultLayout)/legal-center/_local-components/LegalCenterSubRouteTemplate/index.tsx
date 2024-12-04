import React, { memo } from 'react';
import s from './legalCenterSubRouteTemplate.module.scss';
import cn from 'clsx';
import Link from 'next/link';
import AsideSubNav from '../AsideSubNav';
import { LegalCenterSubRoutePages } from '../../page';

interface PropTypes {
    children: React.ReactNode,
    heading: string,
    pageComponent: LegalCenterSubRoutePages
}

function LegalCenterSubRouteTemplate({ children, heading, pageComponent }: PropTypes) {
    return (
        <div className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.container}>
                <div className={s.heading}>
                    <h1>{heading}</h1>
                    <div className={s.headerLinks}>
                        <Link className={s.active} href='#acceptableUsePolicy'>For users</Link>
                        <Link href='#'>For Celebrities</Link>
                    </div>
                </div>

                <div className={s.content}>
                    <AsideSubNav PageComponent={pageComponent} />
                    <div className={s.contentText}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(LegalCenterSubRouteTemplate);