'use client';
import React, { useMemo } from 'react'
import RecursiveSideNavLinks from '../RecursiveSideNavLinks';
import s from './asideSubNav.module.scss';
import { useIsomorphicLayoutEffect } from '@/customHooks';
import { LegalCenterSubRoutePages } from '../../page';

export interface SideNavLinkType {
    name: string;
    href: string;
    isRoot: boolean;
    isScrollToId?: string;
    pageContentClassName?: string;
    pageComponent?: LegalCenterSubRoutePages,
    children?: SideNavLinkType[]
}

interface PropsType {
    PageComponent: LegalCenterSubRoutePages
}

const sideNavLinks: SideNavLinkType[] = [
    {
        name: 'Terms of service',
        href: "/legal-center/terms-of-service",
        pageContentClassName: 'termsOfServiceContent',
        pageComponent: 'TermsOfService',
        isRoot: true,
        children: [
            {
                name: 'Site Terms of Service',
                href: "/legal-center/terms-of-service",
                isRoot: false,
                isScrollToId: 'siteTermsOfService',
                pageContentClassName: 'termsOfServiceContent',
                children: [
                    {
                        name: 'StarzFi Marketplace',
                        href: "/legal-center/terms-of-service",
                        isScrollToId: 'starzFiMarketplace',
                        pageContentClassName: 'termsOfServiceContent',
                        isRoot: false,
                    },
                    {
                        name: 'Business Videos',
                        href: "/legal-center/terms-of-service",
                        isScrollToId: 'businessVideos',
                        pageContentClassName: 'termsOfServiceContent',
                        isRoot: false,
                    },
                ]
            },
            {
                name: 'Additional Site Terms',
                href: "/legal-center/terms-of-service",
                isScrollToId: 'additionalSiteTerms',
                pageContentClassName: 'termsOfServiceContent',
                isRoot: false,
            },
            {
                name: 'Acceptable Use Policy',
                href: "/legal-center/terms-of-service",
                isScrollToId: "acceptableUsePolicy",
                pageContentClassName: 'termsOfServiceContent',
                isRoot: false,
            },
        ]
    },
    {
        name: 'Privacy policy',
        href: "/legal-center/privacy-policy",
        isRoot: true,
        pageComponent: 'PrivacyPolicy',
        pageContentClassName: 'privacyPolicyContent',
    },
    {
        name: 'Community guidelines',
        href: "/legal-center/community-guidelines",
        isRoot: true,
        pageComponent: 'CommunityGuidelines',
        pageContentClassName: 'communityGuidelinesContent',
    },
    {
        name: 'Additional terms',
        href: "/legal-center/additional-terms",
        isRoot: true,
        pageComponent: 'AdditionalTerms',
        pageContentClassName: 'additionalTermsContent',
    },
]

function AsideSubNav({ PageComponent }: PropsType) {

    /* 
    Set up an Intersection Observer that toggles "contentNavLinkIsActive" class base on the user scroll Position.
    This is done for all sideNavLinks "isRoot: true" objects only
     */
    useIsomorphicLayoutEffect(() => {
        // Get all rootContentEl, element whose object "isRoot: true"
        let rootContentEl: NodeListOf<Element>[] = []
        sideNavLinks.forEach(link => {
            rootContentEl.push(document.querySelectorAll(`.${link.pageContentClassName}`))
        });


        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            // Get all scroll Nav Link for the current page
            const contentNavLinks = document.querySelectorAll(`[data-scroll-page-content-classname="${entries[0].target.className}"] `);

            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                // Get the Scroll Nav Link attached to the current intersecting content
                const entryNav = document.querySelector(`[data-scroll-content-id="${entries[0].target.id}"] `) as HTMLElement;

                contentNavLinks.forEach(link => {
                    link.classList.remove('contentNavLinkIsActive')
                })
                entryNav.classList.add('contentNavLinkIsActive');
            })
        }


        let observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: "0px",
            threshold: 0.9,
        });

        // Observe all contents
        rootContentEl.forEach(contents => {
            contents.forEach(content => {
                observer.observe(content);
            })
        })
    }, []);


    return (
        <div className={s.subNavWrapper}>
            <div className={s.recursiveContainer}>
                <RecursiveSideNavLinks links={sideNavLinks} />
            </div>
            <div className={s.mobileSelectbox}>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
    )
}

export default AsideSubNav