'use client';
import React, { useMemo } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import cn from "clsx";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from 'react';

/* 
THIS COMPONENTS TRYS TO RECREATE THE NAVLINK FEATURES IN REACT-ROUTER-DOM v6.
ADDING AN "ISACTIVE" CLASS TO THE LINK ELEMNT WHEN THE LINK IS ACTIVE
*/

interface propsType extends ComponentPropsWithRef<typeof Link> {
    children?: React.ReactNode,
    className?: string,
    activeClassNames?: string,
    isLink?: boolean,
    childLinks?: LinkProps['href'][]
}

const NavLink = forwardRef(function NavLink(
    {
        children,
        className = '',
        isLink = true,
        childLinks = [],
        href,
        activeClassNames = '',
        ...rest
    }: propsType,
    ref: React.ForwardedRef<any>
) {
    const pathname = usePathname()

    const isActive = useMemo(() => {
        let isActive = false;

        if (isLink) { //children element is a Link component
            if (href === pathname || pathname.startsWith(href as string)) {
                isActive = true;
            }
        } else { // children element is a DropDown of Link components
            isActive = childLinks.some((url) => url === pathname || pathname.startsWith(url as string))
        }


        return isActive
    }, [childLinks, href, isLink, pathname])


    // return a span element when the children element is not a link
    if (!isLink) {
        return (
            <span {...rest} className={cn(className, isActive && activeClassNames)} ref={ref} >{children}</span>
        )
    }

    return (
        <Link {...rest} ref={ref} href={href} className={cn(className, isActive && activeClassNames)} >
            {children}
        </Link>
    )
})
export default NavLink