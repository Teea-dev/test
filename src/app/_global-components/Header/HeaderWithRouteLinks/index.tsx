"use client";
import React, { useState, useRef, useCallback } from "react";
import s from "./headerWithRouteLinks.module.scss";
import PrimaryButton from "@/app/_global-components/PrimaryButton/Link";
import HamburgerPopover from "./HamburgerPopover";
import gsap from "gsap";
import NavLinksGroup from "./NavLinksGroup";
import cn from "clsx";
import { BsExclamationCircle } from "react-icons/bs";

function HeaderWithRouteLinks() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleHamburgerClickRef = useRef<Function | null>(null);

  const toggleNavVisibility = useCallback((shouldOpen: boolean) => {
    const linkWrapper = document.querySelector(`.${s.links}`) as HTMLElement;
    setIsNavOpen(shouldOpen);

    if (shouldOpen) {
      gsap.to(linkWrapper, {
        translateX: 0,
        duration: 0.5,
      });
    } else {
      gsap.to(linkWrapper, {
        translateX: -900,
        duration: 0.5,
      });
    }
  }, []);

  /* 
    Get Hamburger Click Handle function from Hamburger Component
    */
  const getHamburgerClickCallback = useCallback((cb: Function) => {
    handleHamburgerClickRef.current = cb;
  }, []);

  return (
    <div className={s.wrapper}>
      <h4>Public stories</h4>

      <BsExclamationCircle />
    </div>
  );
}

export default HeaderWithRouteLinks;
