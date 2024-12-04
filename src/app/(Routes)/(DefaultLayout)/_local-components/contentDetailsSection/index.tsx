import React from 'react';
import s from './contentDetailsSection.module.scss';
import cn from "clsx";
import NextImageShimmer from '@/app/_global-components/NextImageShimmer';

function ContentDetailsSection() {
    return (
        <div className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.container}>
                <div className={s.content}>
                    <h2>Enjoy free and paid content whenever you like</h2>
                    <p>View your tailored feed for free or acquire custom content in budget-friendly and splurge-worthy packages alike: from a simple hello…to your own production.</p>
                </div>
                <div className={s.imgs}>
                    <div>
                        <span>
                            <NextImageShimmer
                                src={'/imgs/contentTypes/video.webp'}
                                fill
                                alt={`content image`}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </span>
                        <p>Video</p>
                    </div>
                    <div>
                        <span>
                            <NextImageShimmer
                                src={'/imgs/contentTypes/audio.webp'}
                                fill
                                alt={`content image`}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </span>
                        <p>Audio</p>
                    </div>
                    <div>
                        <span>
                            <NextImageShimmer
                                src={'/imgs/contentTypes/acapella.webp'}
                                fill
                                alt={`content image`}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </span>
                        <p>Acapella</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentDetailsSection;