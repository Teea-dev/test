import { createDebounceFunc } from "@/utils/createDebounceFunc";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default class UiAnimations {
    gsapCtx: gsap.Context;
    styles: any;
    gsapMm: gsap.MatchMedia;
    scrollTriggerRefs!: globalThis.ScrollTrigger;
    breakPoint: number;

    constructor(gsapCtx: gsap.Context, styles: any) {
        this.gsapCtx = gsapCtx;
        this.styles = styles;
        this.gsapMm = gsap.matchMedia();
        this.breakPoint = 800;

        // Bind all method this context
        this.cardFlipAnim = this.cardFlipAnim.bind(this);
        this.onResize = createDebounceFunc(this.onResize.bind(this), 250);


        window.addEventListener("resize", this.onResize);

    }

    init() {
        this.gsapCtx.add(this.cardFlipAnim);
    }

    cardFlipAnim() {
        const wrapperEl = document.querySelector(`.${this.styles.wrapper}`) as HTMLElement;
        const cards = gsap.utils.toArray<HTMLElement>(document.querySelectorAll(`.${this.styles.decor}`));



        // Animate base on screen size
        this.gsapMm.add({
            isDesktop: `(min-width: ${this.breakPoint}px)`,
            isMobile: `(max-width: ${this.breakPoint - 1}px)`,
        }, (context) => {
            let { isDesktop, isMobile } = context.conditions as any;

            if (isDesktop) {
                gsap.to(
                    cards,
                    {
                        translate: (i: number, target: HTMLElement) => {
                            const translateValue = target.getAttribute('data-anim-translate')
                            return translateValue || `0px 0px`
                        },
                        rotate: (i: number, target: HTMLElement) => {
                            const rotateValue = target.getAttribute('data-anim-rotate')
                            return rotateValue || `0deg`
                        },
                        duration: 0.5,
                        stagger: {
                            each: 0.15,
                            ease: 'expo'
                        },
                        scrollTrigger: {
                            trigger: wrapperEl,
                            start: `top 55%`,
                            end: `bottom 55%`,
                            toggleActions: "play none none reverse",
                            // markers: true
                        }
                    }
                )
            }

        });


    }


    onResize() {
        // refresh all markers positions
        ScrollTrigger.refresh()
    }

    dispose() {
        this.gsapMm.revert();

        // clear event listners
        window.removeEventListener("resize", this.onResize)
    }
}