'use client';
import { ArrowRightIcon } from '@/app/_global-components/icons';
import NavLink from '@/app/_global-components/NavLink';
import React, { useRef } from 'react';
import s from './navLinksGroup.module.scss';
import { useIsomorphicLayoutEffect } from '@/customHooks';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { createDebounceFunc } from '@/utils/createDebounceFunc';

const navLinks = [
    {
        text: 'Home',
        href: '/',
        id: 'home',
        default: true
    },
    {
        text: 'How it works',
        href: '/how-it-works',
        id: 'how-it-works',
        default: false
    },
    {
        text: 'For celebrities',
        href: '/for-celebrities',
        id: 'for-celebrities',
        default: false
    },
    {
        text: 'Join the team',
        href: '/join-the-team',
        id: 'join-the-team',
        default: false
    },
    {
        text: 'Legal center',
        href: '/legal-center',
        id: 'legal-center',
        default: false
    },
];

interface PropsType {
    handleHamburgerClick: Function | null
}

function NavLinksGroup({ handleHamburgerClick }: PropsType) {
    const navLinkSliderRef = useRef<HTMLSpanElement | null>(null);
    const pathname = usePathname();

    // Slide navLinkSliderRef base on current pathname
    useIsomorphicLayoutEffect(() => {

        let activeLinkId = '';
        for (let i = 0; i < navLinks.length; i++) {
            const link = navLinks[i];
            if (pathname === '/') {
                activeLinkId = link.id;
                break;
            } else if (pathname.includes(link.id)) {
                activeLinkId = link.id;
                break;
            }
        }

        if (!activeLinkId) return;

        const animateSlider = () => {
            if (!navLinkSliderRef.current) return;

            const defaultLink = document.querySelector(`[data-isactive="true"]`) as HTMLLinkElement;
            const currActive = document.getElementById(activeLinkId) as HTMLLinkElement;

            const defaultLinkRect = defaultLink.getBoundingClientRect();
            const currActiveRect = currActive.getBoundingClientRect();
            const sliderRect = navLinkSliderRef.current.getBoundingClientRect();

            const slideDistance = currActiveRect.left - defaultLinkRect.left;
            const slideDistanceOffset = (currActiveRect.width / 2) - (sliderRect.width / 2);


            gsap.to(
                navLinkSliderRef.current,
                {
                    translateX: slideDistance + slideDistanceOffset,
                    duration: 0.8
                }
            )
        }

        animateSlider();
        const onResizeAnimateSlider = createDebounceFunc(animateSlider, 250);
        window.addEventListener("resize", onResizeAnimateSlider);

        return () => window.removeEventListener('resize', onResizeAnimateSlider);

    }, [pathname])
    return (
        <div className={s.wrapper}>
            {
                navLinks.map(link => (
                    <NavLink
                        key={link.id}
                        data-isactive={link.default ? "true" : "false"}
                        id={link.id}
                        className={s.navLink}
                        href={link.href}
                        onClick={() => { handleHamburgerClick && handleHamburgerClick(false) }}
                    >
                        <span>{link.text}</span>
                        <ArrowRightIcon />
                    </NavLink>
                ))
            }

            <span role='presentation' ref={navLinkSliderRef} className={s.navLinkSlider} />
        </div>
    )
}

export default NavLinksGroup;