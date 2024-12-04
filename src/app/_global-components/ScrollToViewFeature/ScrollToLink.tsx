'use client';
import Link from 'next/link';
import React, { ComponentPropsWithRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { scrollElementToView } from './ScrollToLinkGlobalComponent';
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallbackComponent from '../ErrorBoundaryFallbackComponent';


/* 
-- Description --
This is a component that extends the NextJs Link component, when clicked it not only takes a user to the page of the new route but also scroll them to a particuler section of the page using search query params in the url.

Should be used in conjuction with ~ScrollToLinkGlobalComponent~
*/


interface PropTypes extends ComponentPropsWithRef<typeof Link> {
    scrollToId: string
}



function ScrollToLink({ children, scrollToId, href, ...props }: PropTypes) {
    const searchParams = useSearchParams();

    const persistScrollFeature = () => {
        const urlScrollToId = searchParams.get("scrollToId");


        if (!urlScrollToId || scrollToId !== urlScrollToId) return; //let the Global Component Handle it

        scrollElementToView(urlScrollToId);
    }

    return (
        <Link
            {...props}
            onClick={persistScrollFeature}
            href={`${href}?scrollToId=${scrollToId}`}
            scroll={false} //very important, its disable nextJs scroll To top on navigation feature
        >
            {children}
        </Link>
    )
}

export default withErrorBoundary(ScrollToLink, {
    fallbackRender: (props) => (<ErrorBoundaryFallbackComponent
        {...props}
        showButton={false}
        errorText='short'
    />)
}) 