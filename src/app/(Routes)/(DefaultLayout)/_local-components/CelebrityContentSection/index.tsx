import React from "react";
import s from "./celebrityContentSection.module.scss";
import cn from "clsx";
import Carousel from "@/app/_global-components/Carousel";
import VideoCard from "./VideoCard";
import postApiInstance from "@/fetchEndpoints/posts/serverFetchApi";
import { CelebritiesDataType } from "@/fetchEndpoints/posts/types";
import FetchErrorComponent from "../FetchErrorComponent";

async function CelebrityContentSection() {
  const posts = await postApiInstance.getCelebritiesPosts<
    CelebritiesDataType[]
  >();

  return (
    <div className={cn("layout-block-inner", s.wrapper)}>
      <div className={s.container}>
        {/* <div className={s.heading}>
                    <h3>Collect celebrity content made just for you</h3>
                    <p>Shoutouts and other personalized messages in just a few clicks:</p>
                </div> */}
        {posts.isError || !posts.resData?.data ? (
          <FetchErrorComponent />
        ) : posts.resData?.data.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            This post section is currently empty
          </div>
        ) : (
          <Carousel navArrowLocation="outside" slidePerContent={2}>
            {posts.resData.data.map((post, i) => (
              <VideoCard key={`${post.handle}-${i}`} post={post} />
            ))}
          </Carousel>
        )}
        {/* <div className={s.footer}>
                    <div>
                        <h3>Pick a star</h3>
                        <p>Check out your favourite starz and what their content is worth to decide what works for you.
                        </p>
                    </div>
                    <div>
                        <h3>Book request</h3>
                        <p>Confirm a few extra details about your preferences and complete checkout.

                        </p>
                    </div>
                    <div>
                        <h3>Receive</h3>
                        <p>Within specified time, Starz will accept, create, and complete your special content.</p>
                    </div>
                    <div>
                        <h3>Share</h3>
                        <p>Send your unique message to friends and family or show it off to everyone on your StarzFi feed.</p>
                    </div>
                </div> */}
      </div>
    </div>
  );
}

export default CelebrityContentSection;
