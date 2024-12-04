"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./hamburgerPopover.module.scss";
import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "react-use";

interface PropsType {
  isNavOpen: boolean;
  toggleNavVisibility: (value: boolean) => void;
  getHamburgerClickCallback: (cb: Function) => void;
}

function HamburgerPopover({
  isNavOpen,
  toggleNavVisibility,
  getHamburgerClickCallback,
}: PropsType) {
  const hamburgerIsAnimating = useRef(false);

  const handleHamburgerClick = useCallback(
    (shouldOpen: boolean) => {
      hamburgerIsAnimating.current = true;
      const hamburger = document.querySelector(
        `.${styles.hamburger}`
      ) as HTMLDivElement;

      const tl = gsap.timeline({
        defaults: { duration: 0.1 },
      });

      //animate timmeline base on navBar state
      if (shouldOpen) {
        tl.to(hamburger.children[1], {
          scaleX: 0,
          transformOrigin: "right center",
        })
          .to(hamburger.children[0], {
            rotate: "45deg",
            translateY: "10px",
          })
          .to(
            hamburger.children[2],
            {
              rotate: "-45deg",
              translateY: "-10px",
            },
            "<"
          )
          .then(() => {
            hamburgerIsAnimating.current = false;
            toggleNavVisibility(shouldOpen);
            // document.body.style.overflowY = '';
          });
      } else {
        tl.to([hamburger.children[0], hamburger.children[2]], {
          rotate: "0deg",
          translateY: "0px",
        })
          .to(hamburger.children[1], {
            scaleX: 0.5,
          })
          .then(() => {
            hamburgerIsAnimating.current = false;
            toggleNavVisibility(shouldOpen);
            // document.body.style.overflowY = 'auto';
          });
      }
    },
    [toggleNavVisibility]
  );

  useIsomorphicLayoutEffect(() => {
    getHamburgerClickCallback(handleHamburgerClick);
  }, []);

  return (
    <div
      onClick={() => handleHamburgerClick(!isNavOpen)}
      className={styles.hamburger}
    >
      <span />
      <span />
      <span />
    </div>
  );
}

export default HamburgerPopover;
