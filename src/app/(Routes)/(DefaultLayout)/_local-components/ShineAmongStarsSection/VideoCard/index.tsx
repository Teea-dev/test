import NextImageShimmer from "@/app/_global-components/NextImageShimmer";
import { CldVideoPlayer } from "@/app/_global-components/VideoPlayer";
import s from "./videoCard.module.scss";
import React from "react";
import { StarzDataType } from "@/fetchEndpoints/posts/types";
import { FaPlay } from "react-icons/fa";
interface PropsType {
  post: StarzDataType;
}

function VideoCard({ post }: PropsType) {
  return (
    <CldVideoPlayer src={post.video} dimensionType="shineCardDimension">
      <div className={s.videoInfoContainer}>
        <div className={s.vidContent}>
          <div className={s.content}>
            <FaPlay />
            <p>1600</p>
          </div>
        </div>
      </div>
    </CldVideoPlayer>
  );
}

export default VideoCard;
