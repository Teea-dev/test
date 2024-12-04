"use client";
import "./cld-video-player.css";
import s from "./cldVideoPlayer.module.scss";
import React, {
  useCallback,
  useId,
  useRef,
  useMemo,
  useState,
  useEffect,
} from "react";
import cn from "clsx";
import Script from "next/script";
import { parseUrl } from "@cloudinary-util/util";
import { ShimmerLoading } from "../../LoadingSpinner";
import {
  MuteVolumeIcon,
  PauseWithBorderIcon,
  PlayWithBorderIcon,
  ReplayIcon,
  SadFaceIcon,
  VolumeIcon,
} from "../../icons";
import createThrottleFunc from "@/utils/createThrottleFunc";
import gsap from "gsap";

/* 
-- Description --
* This is Component that loads in a cloudinary script that's used to play cloudinary video with alot of customisation to fit into our UI needs.
* Check Docs: https://cloudinary.com/documentation/cloudinary_video_player#installation_and_setup
* Check Docs: https://cloudinary.com/documentation/video_player_react_tutorial
* Check Docs: https://cloudinary.com/documentation/video_player_api_reference

-- Params --
* children: React Components passed as children to the carousel;

* src: Cloudinary video url

* videoInfoClassName:  video content info wrapper className;

* wrapperClassName:  video player wrapper className;

playerOptions: cloudinary video player options. check https://cloudinary.com/documentation/video_player_api_reference
* showCustomControls: cloudinary controls is off by default so this value dictate whether to show custom controls implemented;

* useHoverControls: By default a video plays when a mouse a hover on top of it, so the value dictate whether to enable or disable that feature;

* showCustomLoadingAndError: whether to show a customly made loading and error fallback for the cloudinary video player;

* showGradientOverlay: whether to display a black gradient overlay placed on top of each video card;

* showProgressBar: whether to show a progress bar that shows the progress position of the video currently being played;

* hideGradientOverlayOnHover: By default the gradient overlay gets hidden when a user hover on top the video player, this value either enable or disable that feature;

* dimensionType: Uses different dimension (width x height) depending on which section or page the video player was used
*/

interface PropTypes {
  children?: React.ReactNode;
  src: string;
  videoInfoClassName?: string;
  wrapperClassName?: string;
  playerOptions?: any;
  showCustomControls?: boolean;
  useHoverControls?: boolean;
  showCustomLoadingAndError?: boolean;
  showGradientOverlay?: boolean;
  showProgressBar?: boolean;
  hideGradientOverlayOnHover?: boolean;
  dimensionType:
    | "shineCardDimension"
    | "celebrityCardDimension"
    | "TailorFeedDimension"
    | "FullViewDimension";
}

function CldVideoPlayer({
  children,
  src,
  dimensionType,
  videoInfoClassName = "",
  wrapperClassName = "",
  playerOptions = {},
  showCustomControls = true,
  useHoverControls = true,
  showCustomLoadingAndError = true,
  showGradientOverlay = true,
  showProgressBar = true,
  hideGradientOverlayOnHover = true,
  ...props
}: PropTypes) {
  const playerId = useId();
  const cloudinaryRef = useRef<any>(null);
  const playerRef = useRef<any>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cardWrapperRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const customBtnSleepTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [canPlayVid, setCanPlayVid] = useState(false);
  const [isError, setIsError] = useState(false);

  const srcParts = useMemo(() => {
    const srcParts = parseUrl(src);

    if (!srcParts) {
      console.error(`Failed to parse cloudinary Src: ${src}`);
    }
    return srcParts;
  }, [src]);

  const toggleCustomBtnSleepState = useRef(
    createThrottleFunc((sleep: boolean, isRecursive: boolean = true) => {
      if (!useHoverControls || !showCustomControls) return;

      const customControls = cardWrapperRef.current?.querySelectorAll(
        `.${s.customControls}`
      );
      const customeVolumn = cardWrapperRef.current?.querySelectorAll(
        `.${s.customVolumn}`
      );
      let arr = gsap.utils.toArray<HTMLElement>([
        customControls,
        customeVolumn,
      ]);
      arr = arr?.filter((el) => !el?.classList?.contains(s.replayBtn)); // remove replay Btn from sleep mode

      if (sleep) {
        // Hide Custom btns if user is inactive for 5s

        if (customBtnSleepTimeoutRef.current) {
          clearTimeout(customBtnSleepTimeoutRef.current);
          customBtnSleepTimeoutRef.current = null;
        }

        customBtnSleepTimeoutRef.current = setTimeout(() => {
          // If user isn't currently hovering on Vid Card don't hide custom btns
          if (!cardWrapperRef.current?.classList.contains(s.cardVidActive))
            return;
          gsap.to(arr, {
            autoAlpha: 0,
            pointerEvents: "none",
            duration: 0.5,
          });
        }, 5000);
      } else {
        //else display btns

        gsap
          .to(arr, {
            autoAlpha: 1,
            pointerEvents: "auto",
            duration: 0.5,
          })
          .then(() => {
            if (isRecursive) {
              // anticipate hiding the btn again
              toggleCustomBtnSleepState.current(true);
            }
          });
      }
    }, 250)
  );

  const startPlayingVid = useCallback(() => {
    if (!canPlayVid) return;
    if (!useHoverControls) return;

    console.log("i'm playing");

    cardWrapperRef.current?.classList.add(s.cardVidPlaying);
    cardWrapperRef.current?.classList.add(s.cardVidActive);
    cardWrapperRef.current?.classList.remove(s.cardVidEnded);
    playerRef.current.play();
    toggleCustomBtnSleepState.current(true);
  }, [canPlayVid, toggleCustomBtnSleepState, useHoverControls]);

  const stopPlayingVid = useCallback(
    (removeIsActiveClass: boolean) => {
      if (!canPlayVid) return;
      if (!useHoverControls) return;

      console.log("i stopped playing");

      cardWrapperRef.current?.classList.remove(s.cardVidPlaying);
      cardWrapperRef.current?.classList.remove(s.cardVidEnded);
      if (removeIsActiveClass) {
        cardWrapperRef.current?.classList.remove(s.cardVidActive);
      }
      playerRef.current.pause();
      toggleCustomBtnSleepState.current(false, false);
    },
    [canPlayVid, toggleCustomBtnSleepState, useHoverControls]
  );

  const vidOnEndCallback = useCallback(() => {
    console.log("video ended");

    cardWrapperRef.current?.classList.remove(s.cardVidPlaying);
    cardWrapperRef.current?.classList.add(s.cardVidEnded);
  }, []);

  const toggleVidMuteState = useCallback(() => {
    if (!canPlayVid) return;

    if (playerRef.current.isMuted()) {
      playerRef.current.unmute();
      cardWrapperRef.current?.classList.add(s.cardVidUnMuted);
    } else {
      playerRef.current.mute();
      cardWrapperRef.current?.classList.remove(s.cardVidUnMuted);
    }
  }, [canPlayVid]);

  /* 
    Fires when Cloudinary Script has finished loading
    */
  const handleOnLoad = useCallback(() => {
    if (playerRef.current) return;

    // Set up videPlayer with all its options
    const setUpVideoPlayer = (cloudinary: any) => {
      cloudinaryRef.current = cloudinary;

      const options = {
        cloud_name: srcParts?.cloudName,
        muted: true,
        playsinline: true,
        publicId: srcParts?.publicId,
        preload: "metadata",
        fluid: true,
        controls: false,
        bigPlayButton: false,
        hideContextMenu: true,
        sourceTypes: ["hls", "webm/vp9", "mp4/h265", "mp4"],
        transformation: {
          streaming_profile: "auto",
        },
        ...playerOptions,
      };

      playerRef.current = cloudinaryRef.current.videoPlayer(
        videoRef.current,
        options
      );

      playerRef.current.on("loadedmetadata", () => {
        setCanPlayVid(true);
        setIsError(false);
      });

      playerRef.current.on("canplay", () => {
        setCanPlayVid(true);
        setIsError(false);
      });

      playerRef.current.on("ended", () => {
        vidOnEndCallback();
      });
      playerRef.current.on("error", () => {
        setIsError(true);
      });

      playerRef.current.on(
        "timeupdate",
        createThrottleFunc((e: any) => {
          // Calculate Video Progress duration
          if (!progressBarRef.current || !showProgressBar) return;
          const progressProportion =
            playerRef.current.currentTime() / playerRef.current.duration();

          gsap.to(progressBarRef.current, {
            scaleX: progressProportion,
            duration: 1,
          });
        }, 1000)
      );
    };

    if ("cloudinary" in window) {
      setUpVideoPlayer(window.cloudinary);
    }
  }, [
    playerOptions,
    showProgressBar,
    srcParts?.cloudName,
    srcParts?.publicId,
    vidOnEndCallback,
  ]);

  return (
    <>
      <div
        ref={cardWrapperRef}
        className={cn(
          s.wrapper,
          s[dimensionType],
          wrapperClassName,
          showGradientOverlay && s.gradientOverlay,
          hideGradientOverlayOnHover && s.gradientOverlayHover
        )}
        onMouseEnter={() => {
          startPlayingVid();
        }}
        onMouseLeave={() => {
          stopPlayingVid(true);
        }}
        onMouseMove={() => {
          toggleCustomBtnSleepState.current(false);
        }}
        onTouchStart={() => {
          toggleCustomBtnSleepState.current(false);
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <video
            ref={videoRef}
            className={s.cloudinaryVideoPlayer}
            id={playerId}
            width={1024}
            height={720}
          />
        </div>

        {showCustomControls && (
          <>
            <button
              onClick={toggleVidMuteState}
              className={cn(s.customVolumn, s.volumnUpBtn)}
            >
              <VolumeIcon />
            </button>
            <button
              onClick={toggleVidMuteState}
              className={cn(s.customVolumn, s.volumnDownBtn)}
            >
            <p>16</p>
            </button>
            <button
              onClick={() => {
                startPlayingVid();
              }}
              className={cn(s.customControls, s.playBtn)}
            >
              <PlayWithBorderIcon />
            </button>
            <button
              onClick={(e) => {
                stopPlayingVid(false);
              }}
              className={cn(s.customControls, s.pauseBtn)}
            >
              <PauseWithBorderIcon />
            </button>
            <button
              onClick={(e) => {
                startPlayingVid();
              }}
              className={cn(s.customControls, s.replayBtn)}
            >
              <ReplayIcon />
            </button>
          </>
        )}

        {showProgressBar && (
          <div ref={progressBarRef} className={s.progressBar} />
        )}
        {!canPlayVid && showCustomLoadingAndError && (
          <div className={s.overLayShimmer}>
            <ShimmerLoading />
          </div>
        )}

        {isError && showCustomLoadingAndError && (
          <div className={s.vidErrorText}>
            <SadFaceIcon color="#b3b3b3" />
            <p>
              An Error occurred while trying to load this video, please check
              your internet connection or try again later
            </p>
          </div>
        )}

        <div className={cn(s.videoInfoWrapper, videoInfoClassName)}>
          {children}
        </div>
      </div>
      <Script
        id={`cloudinary-videoplayer-${playerId}`}
        src={`https://unpkg.com/cloudinary-video-player@1.9.16/dist/cld-video-player.min.js`}
        onLoad={handleOnLoad}
        onError={(e) => {
          setIsError(true);
        }}
      />
    </>
  );
}

export default CldVideoPlayer;
