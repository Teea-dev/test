import React from 'react'
import { IconTypes } from './types'

function TailArrowRight({ width = 15, height = 11, color = "", inheritColor = false }: IconTypes) {
    return (
        <svg width={width} height={height} viewBox="0 0 15 11" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.18815 10.9583L8.29232 10.0833L11.7923 6.58333H0.833984V5.33333H11.7923L8.27148 1.8125L9.16732 0.9375L14.1882 5.95833L9.18815 10.9583Z" fill={inheritColor ? "inherit" : color ? color : "white"} />
        </svg>
    )
}

export default TailArrowRight;