import React from 'react';
import s from './heroSection.module.scss';
import PrimaryButton from "@/app/_global-components/PrimaryButton/Link"
import cn from 'clsx';
import { CldVideoPlayer } from '@/app/_global-components/VideoPlayer';

function HeroSection() {


    return (
        <div className={s.wrapper}>
            <div className={cn('layout-block')}>
                <div className={cn(s.container)}>
                    <div className={s.content}>
                        <h1>
                            Experience exclusive entertainment like never before
                        </h1>
                        <p>
                            Get celebrity content made just for you. Want to become a creator yourself? We’ve got you too.
                        </p>
                    </div>
                    <PrimaryButton className={s.btn} href={'/download'}>
                        Take me to the starz
                    </PrimaryButton>
                </div>
            </div>
            <CldVideoPlayer
                src='https://res.cloudinary.com/danerys/video/upload/f_auto:video,q_auto/v1/Starzfi/config/n74jbxdrpgnoixeos3pr'
                dimensionType='FullViewDimension'
                showCustomControls={false}
                showCustomLoadingAndError={false}
                useHoverControls={false}
                hideGradientOverlayOnHover={false}
                showProgressBar={false}
                wrapperClassName={s.videoBg}
                playerOptions={{
                    loop: true,
                    autoplayMode: 'always'
                }}
            />
        </div>
    )
}

export default HeroSection;