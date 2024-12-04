import { createDebounceFunc } from "@/utils/createDebounceFunc";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default class UiAnimations {
    gsapCtx: gsap.Context;
    s: any;
    gsapMm: gsap.MatchMedia;
    scrollTriggerRefs!: globalThis.ScrollTrigger;
    breakPoint: number;

    constructor(gsapCtx: gsap.Context, styles: any) {
        this.gsapCtx = gsapCtx;
        this.s = styles;
        this.gsapMm = gsap.matchMedia();
        this.breakPoint = 800;

        // Bind all method this context
        this.cardSlideInAnim = this.cardSlideInAnim.bind(this);
        this.onResize = createDebounceFunc(this.onResize.bind(this), 250);


        window.addEventListener("resize", this.onResize);

    }

    init() {
        this.gsapCtx.add(this.cardSlideInAnim);
    }

    cardSlideInAnim() {
        const wrapperEl = document.querySelector(`.${this.s.wrapper}`) as HTMLElement;
        const imgWrapper = document.querySelector(`.${this.s.imgWrapper}`) as HTMLDivElement;




        // Animate base on screen size
        this.gsapMm.add({
            isDesktop: `(min-width: ${this.breakPoint}px)`,
            isMobile: `(max-width: ${this.breakPoint - 1}px)`,
        }, (context) => {
            let { isDesktop, isMobile } = context.conditions as any;
            const tl = gsap.timeline({ defaults: { duration: 2, ease: 'power2.out', } });


            tl.to(
                imgWrapper,
                {
                    scale: 1,
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                }
            ).to(
                imgWrapper,
                {
                    duration: 5,
                    background: `linear-gradient(black, black) padding-box,
                    linear-gradient(
                        to bottom,
                        #f5b53dd7,
                        #71d4ffd7,
                        #08aa58d7,
                        transparent 90%
                      )
                      border-box`
                }
            ).to(
                imgWrapper,
                {
                    duration: 5,
                    repeat: -1,
                    yoyo: true,
                    background: `linear-gradient(black, black) padding-box,
                    linear-gradient(
                        to bottom,
                        #f5b53dd7,
                        #71d4ffd7,
                        #08aa58d7,
                        transparent 40%
                      )
                      border-box`
                }
            )


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