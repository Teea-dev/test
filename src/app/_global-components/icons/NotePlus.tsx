import React from 'react'
import { IconTypes } from './types'

function NotePlus({ width = 26, height = 30, color = "", inheritColor = false }: IconTypes) {
    return (
        <svg width={width} height={height} viewBox="0 0 26 30" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.6667 14.3332V8.33317L17.6667 1.6665H3.66668C3.31305 1.6665 2.97392 1.80698 2.72387 2.05703C2.47382 2.30708 2.33334 2.64622 2.33334 2.99984V26.9998C2.33334 27.3535 2.47382 27.6926 2.72387 27.9426C2.97392 28.1927 3.31305 28.3332 3.66668 28.3332H11.6667M19 18.3332V27.6665M14.3333 22.9998H23.6667" stroke={inheritColor ? "inherit" : color ? color : "white"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default NotePlus;