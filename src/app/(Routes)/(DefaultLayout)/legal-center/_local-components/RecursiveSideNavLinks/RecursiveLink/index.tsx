import ScrollToLink from '@/app/_global-components/ScrollToViewFeature/ScrollToLink';
import Link from 'next/link';
import React, { useMemo, memo } from 'react';
import RecursiveSideNavLinks from '..';
import { SideNavLinkType } from '../../AsideSubNav';
import cn from 'clsx';
import s from './recursiveLink.module.scss';
import { usePathname } from 'next/navigation';

interface PropTypes {
    link: SideNavLinkType
}

function RecursiveLink({ link }: PropTypes) {
    const pathname = usePathname();

    const isActive = useMemo(() => {
        let isActive = false;
        if (link.isRoot && pathname.includes(link.href)) {
            isActive = true;
        }


        return isActive
    }, [link.href, link.isRoot, pathname])


    return (
        <div
            className={cn(s.sideNavLinkContainer, !link.isRoot && s.sideNavLinkOffspring)}>
            {
                link.isScrollToId ?
                    <ScrollToLink
                        scrollToId={link.isScrollToId}
                        data-scroll-page-content-classname={link.pageContentClassName}
                        data-scroll-content-id={link.isScrollToId}
                        className={
                            cn(
                                s.sideNavLink,
                            )}
                        href={link.href}>
                        {link.name}
                    </ScrollToLink>
                    :
                    <Link
                        className={
                            cn(
                                s.sideNavLink,
                                link.isRoot && s.sideNavLinkDot,
                                isActive && s.active
                            )}
                        href={link.href}>
                        {link.name}
                    </Link>
            }


            {
                link?.children ? <RecursiveSideNavLinks links={link.children} /> : null
            }
            {
                link.isRoot && <hr className={cn(s.sideNavLinkLine, isActive && s.active)} />
            }
        </div>
    )
}

export default memo(RecursiveLink);