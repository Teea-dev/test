import React from 'react';
import s from './tailorYourFeedSection.module.scss';
import cn from 'clsx';
import Carousel from '@/app/_global-components/Carousel';
import VideoCard from './VideoCard';
import VideoCardLoadingShimmer from './VideoCard/VideoCardLoadingShimmer';
import postApiInstance from '@/fetchEndpoints/posts/serverFetchApi';
import FetchErrorComponent from '../FetchErrorComponent';
import { TailorFeedDataType } from '@/fetchEndpoints/posts/types';



async function TailorYourFeedSection() {
    const feeds = await postApiInstance.getFeedPosts<TailorFeedDataType[]>();

    return (
        <div className={cn('layout-block-inner', s.wrapper)}>
            <div className={s.heading}>
                <h3>Tailor your feed content</h3>
                <p>Say goodbye to mindless scrolling, and hello to choosing content in any category.</p>
            </div>
            {
                (feeds.isError || !feeds.resData?.data) ?
                    <FetchErrorComponent />
                    : feeds.resData?.data.length === 0 ?
                        <div style={{ textAlign: 'center' }}>This post section is currently empty</div>
                        : <Carousel
                            navArrowLocation='outside'
                            slidePerContent={2}
                        >
                            {
                                feeds.resData.data.map((feed, i) => (
                                    <VideoCard
                                        key={feed.id}
                                        feed={feed}
                                    />
                                ))
                            }
                        </Carousel>
            }

        </div>
    )
}

export default TailorYourFeedSection;