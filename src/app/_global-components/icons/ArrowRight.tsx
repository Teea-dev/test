import React from 'react'
import { IconTypes } from './types'

function ArrowRight({ width = 7, height = 11, color = "", inheritColor = false }: IconTypes) {
    return (

        <svg width={width} height={height} viewBox="0 0 7 11" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.49168 5.50016L0.303223 1.3117L1.49968 0.115234L6.88461 5.50016L1.49968 10.8851L0.303223 9.68862L4.49168 5.50016Z" fill={inheritColor ? "inherit" : color ? color : "white"} />
        </svg>

    )
}

export default ArrowRight;