import React from "react";
import { IconTypes } from "./types";

function ArrowLeft({
  width = 7,
  height = 11,
  color = "white",
  inheritColor = false,
}: IconTypes) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 11"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.50828 5.50016L6.69674 9.68862L5.50028 10.8851L0.115356 5.50016L5.50028 0.115234L6.69674 1.3117L2.50828 5.50016Z"
        fill={inheritColor ? "inherit" : color ? color : "white"}
      />
    </svg>
  );
}

export default ArrowLeft;
