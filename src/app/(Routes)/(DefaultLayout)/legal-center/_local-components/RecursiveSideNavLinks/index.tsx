'use client'
import React, { memo, } from 'react';
import s from './recursiveSideNavLinks.module.scss';
import { SideNavLinkType } from '../AsideSubNav';
import RecursiveLink from './RecursiveLink';



interface PropTypes {
    links: SideNavLinkType[]
}

function RecursiveSideNavLinks({ links }: PropTypes) {


    return (
        <div className={s.sideNavLinksWrapper}>
            {
                links.map((link, i) => (
                    <RecursiveLink
                        key={`${link.name}-${i}`}
                        link={link}
                    />
                ))
            }

        </div>
    )
}

export default memo(RecursiveSideNavLinks);