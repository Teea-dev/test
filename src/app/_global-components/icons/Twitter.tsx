import React from 'react'
import { IconTypes } from './types'

function Twitter({ width = 20, height = 16, color = "", inheritColor = false }: IconTypes) {
    return (
        <svg width={width} height={height} viewBox="0 0 30 27" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.36594 0H0.138672L11.0269 14.8689L0.731854 27H4.22504L12.6456 17.0788L19.9114 27H29.1387L17.7918 11.5047L27.5569 0H24.0637L16.173 9.2961L9.36594 0ZM21.2296 24.3L5.4114 2.7H8.04776L23.8659 24.3H21.2296Z" fill={inheritColor ? "inherit" : color ? color : "white"} />
        </svg>

    )
}

export default Twitter;