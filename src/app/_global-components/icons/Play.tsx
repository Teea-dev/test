import React from 'react'
import { IconTypes } from './types'

function Play({ width = 19, height = 21, color = "", inheritColor = false }: IconTypes) {
    return (
        <svg width={width} height={height} viewBox="0 0 19 21" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.208984 1.9383V18.8792C0.208984 20.171 1.78448 20.9559 2.9978 20.2528L17.7387 11.7823C18.8614 11.1446 18.8614 9.67289 17.7387 9.0188L2.9978 0.564713C1.78448 -0.138431 0.208984 0.646474 0.208984 1.9383Z" fill={inheritColor ? "inherit" : color ? color : "white"} />
        </svg>
    )
}

export default Play