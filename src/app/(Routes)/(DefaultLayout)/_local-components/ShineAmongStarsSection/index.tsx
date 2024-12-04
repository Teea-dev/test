import React from "react";
import s from "./shineAmongStarsSection.module.scss";
import cn from "clsx";
import Carousel from "@/app/_global-components/Carousel";
import VideoCard from "./VideoCard";
import postApiInstance from "@/fetchEndpoints/posts/serverFetchApi";
import { StarzDataType } from "@/fetchEndpoints/posts/types";
import FetchErrorComponent from "../FetchErrorComponent";

async function ShineAmongStarsSection() {
  const posts = await postApiInstance.getStarzPosts<StarzDataType[]>();

  return (
    <div className={cn("layout-block-inner", s.wrapper)}>
      {posts.isError || !posts.resData?.data ? (
        <FetchErrorComponent />
      ) : posts.resData?.data.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          This post section is currently empty
        </div>
      ) : (
        < div className={s.grid}>
          {posts.resData.data.map((post, i) => (
            <VideoCard key={`${post.handle}-${i}`} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShineAmongStarsSection;
