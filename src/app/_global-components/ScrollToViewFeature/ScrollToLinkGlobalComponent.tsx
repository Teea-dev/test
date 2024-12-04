'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallbackComponent from '../ErrorBoundaryFallbackComponent';
import { useIsomorphicLayoutEffect } from '@/customHooks';


/* 
-- Description --
This is a component that only need to be placed at the root app layout, it rerenders when a user clicks on a ~ScrollToLink~ link and scrolls a user to a particular section of the new page using the search query params in the url 
*/



function ScrollToLinkGlobalComponent() {
  const searchParams = useSearchParams();

  useIsomorphicLayoutEffect(() => {
    // get element Id from searchParams
    const scrollToId = searchParams.get("scrollToId");

    if (!scrollToId) return; // return if there is none

    scrollElementToView(scrollToId);

  }, [searchParams])

  return null
}

export default withErrorBoundary(ScrollToLinkGlobalComponent, {
  fallbackRender: (props) => <ErrorBoundaryFallbackComponent {...props} showButton={false} />
})



// Handles scrolling of Element to view
export function scrollElementToView(scrollToId: string) {
  const element = document.getElementById(scrollToId) as HTMLElement;


  if (!element) return;

  const elRect = element.getBoundingClientRect();

  const scrollDistance = elRect.top + window.scrollY;


  // Incase you want to offset the scroll To view Position.
  const offset = Number(element.getAttribute('data-scroll-to-view-offset')) || 0;

  window.scrollTo({
    top: scrollDistance + offset,
    behavior: 'smooth'
  })
}
