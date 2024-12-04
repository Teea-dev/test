
import gsap from 'gsap';

interface propsType {
    styles: any;
    navRightBtn: HTMLButtonElement;
    navLeftBtn: HTMLButtonElement;
    carouselWrapper: HTMLElement;
    sliderWrapper: HTMLElement;
    slidePerContent: number,
    navArrowLocation: 'inside' | 'outside'
}
export default class UiAnimations {
    props: propsType;
    s: any;
    navRightBtn: propsType['navRightBtn'];
    navLeftBtn: propsType['navLeftBtn'];
    carouselWrapper: propsType['carouselWrapper'];
    isDesktop: boolean;
    sliderWrapper: propsType['sliderWrapper'];
    navArrowLocation: propsType['navArrowLocation'];
    slideDistance: { min: number, getMax: () => number };
    slideCoverage: { perEach: number, getContentWidth: () => number };

    constructor(props: propsType) {
        this.props = props;
        this.s = props.styles;
        this.isDesktop = false;
        this.navRightBtn = props.navRightBtn;
        this.navLeftBtn = props.navLeftBtn;
        this.carouselWrapper = props.carouselWrapper;
        this.sliderWrapper = props.sliderWrapper;
        this.navArrowLocation = props.navArrowLocation;
        this.slideDistance = {
            min: 0,
            getMax: () => {
                const width = props.sliderWrapper.clientWidth - this.carouselWrapper.clientWidth;
                return width
            }
        }
        this.slideCoverage = {
            perEach: props.slidePerContent,
            getContentWidth: () => {
                const content = document.querySelector(`.${this.s.slideItem}`) as HTMLElement;
                const comStyle = window.getComputedStyle(content);
                const width = comStyle.width.replace('px', '');

                return Number(width);
            }
        }


        this.navLeftonClick = this.navLeftonClick.bind(this);
        this.navRightonClick = this.navRightonClick.bind(this);

    }

    init() {
        const translateData = this.getElementTranslateData(this.sliderWrapper);


        this.toggleBtnVisibility(this.navLeftBtn, 'Hide');
        this.toggleBtnVisibility(this.navRightBtn, 'Hide');


        if (this.isDesktop) {
            if (translateData.translateX !== this.slideDistance.min) {
                this.toggleBtnVisibility(this.navLeftBtn, 'Show');
            }
            if (this.slideDistance.getMax() > 0) {
                this.toggleBtnVisibility(this.navRightBtn, 'Show');
            }
        }



        this.navLeftBtn.addEventListener('click', this.navLeftonClick);
        this.navRightBtn.addEventListener('click', this.navRightonClick);
    }

    slide(slideToDistance: number, direction: 'Forward' | 'Backward') {
        gsap.to(
            this.sliderWrapper,
            {
                translateX: `${direction === 'Forward' ? '-' : '+'}=${slideToDistance}`,
                duration: 0.5
            }
        )
    }

    navRightonClick() {
        // Get the current transform position of the carousel
        const translateData = this.getElementTranslateData(this.sliderWrapper);

        // calculate the distance to slide by base on the content width and slidePer number
        let slideToDistance = this.slideCoverage.perEach * this.slideCoverage.getContentWidth();

        // Calculate the sliding space left in the carousel
        const slidingSpaceRemaining = this.slideDistance.getMax() - Math.abs(translateData.translateX);

        this.toggleBtnVisibility(this.navLeftBtn, 'Show');

        /* 
        If true then user has gotten to the end of the carousel, Hide the navRight click button
        */
        if (slideToDistance >= slidingSpaceRemaining) {
            slideToDistance = slidingSpaceRemaining;
            this.toggleBtnVisibility(this.navRightBtn, 'Hide');
        }

        this.slide(slideToDistance, 'Forward');
    }

    navLeftonClick() {
        // Get the current transform position of the carousel
        const translateData = this.getElementTranslateData(this.sliderWrapper);

        // calculate the distance to slide by base on the content width and slidePer number
        let slideToDistance = this.slideCoverage.perEach * this.slideCoverage.getContentWidth();

        // Calculate the sliding space left in the carousel
        const slidingSpaceRemaining = Math.abs(translateData.translateX);

        this.toggleBtnVisibility(this.navRightBtn, 'Show');

        /* 
       If true then user has gotten to the start of the carousel, Hide the navLeft click button
       */
        if (slideToDistance >= slidingSpaceRemaining) {
            slideToDistance = slidingSpaceRemaining;
            this.toggleBtnVisibility(this.navLeftBtn, 'Hide');
        }

        this.slide(slideToDistance, 'Backward')

    }

    toggleBtnVisibility(btn: HTMLButtonElement, visibility: 'Hide' | 'Show') {
        // Add different styles effects on nav arrow depending on if its placed inside or outside the carousel
        if (this.navArrowLocation === 'inside') {
            if (visibility === 'Hide') {
                btn.style.display = 'none'
                btn.style.pointerEvents = 'none'
            } else {
                btn.style.display = 'flex'
                btn.style.pointerEvents = 'auto'
            }

        } else {
            if (visibility === 'Hide') {
                btn.style.opacity = '0.4';
                btn.style.cursor = 'not-allowed'
                btn.style.pointerEvents = 'none'
                btn.disabled = true;
            } else {
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
                btn.style.pointerEvents = 'auto'
                btn.disabled = false;
            }
        }
    }


    responsive(isDesktop: boolean) {
        /* 
        Readjust sliderWrapper styles base on current screen size,
        Reinitita slider too
        */
        this.isDesktop = isDesktop;
        this.dispose();

        if (isDesktop) {
            this.sliderWrapper.scrollTo(0, 0);
            this.sliderWrapper.style.transform = `translate(0px, 0px)`;
            this.sliderWrapper.style.translate = `0px, 0px`;
            this.sliderWrapper.style.width = 'max-content';
            this.sliderWrapper.style.overflow = 'hidden';
        } else {
            this.sliderWrapper.style.overflow = 'auto';
            this.sliderWrapper.style.width = 'auto'
            this.sliderWrapper.scrollTo(0, 0);
            this.sliderWrapper.style.transform = `translate(0px, 0px)`;
            this.sliderWrapper.style.translate = `0px, 0px`;
        }
        this.init();
    }



    getElementTranslateData(el: HTMLElement) {
        const regexp = /(-?\d*\.?\d+)/g;
        const elStyles = window.getComputedStyle(el);

        const returnValue = {
            translateX: 0,
            translateY: 0
        }


        if (elStyles.translate !== 'none') {
            const match = elStyles.translate.match(regexp);
            if (match) {
                returnValue.translateX = Number(match[0]);
                returnValue.translateY = match[1] ? Number(match[1]) : 0;
            }

        } else if (elStyles.transform !== 'none') {
            const match = elStyles.transform.match(regexp)!;

            if (match) {
                returnValue.translateX = Number(match[4]);
                returnValue.translateY = Number(match[5]);
            }
        }

        return returnValue;
    }

    dispose() {
        this.navLeftBtn.removeEventListener('click', this.navLeftonClick);
        this.navRightBtn.removeEventListener('click', this.navRightonClick);
    }
}