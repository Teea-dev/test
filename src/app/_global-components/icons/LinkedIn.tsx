import React from 'react'
import { IconTypes } from './types'

function LinkedIn({ width = 20, height = 20, color = "", inheritColor = false }: IconTypes) {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.91732 5.11881C4.06791 5.11881 5.00065 4.18607 5.00065 3.03548C5.00065 1.88489 4.06791 0.952148 2.91732 0.952148C1.76673 0.952148 0.833984 1.88489 0.833984 3.03548C0.833984 4.18607 1.76673 5.11881 2.91732 5.11881ZM5.00065 19.2855V6.78548H0.833984V19.2855H5.00065ZM6.66732 6.78548H10.4173V8.40727C11.0144 7.62285 12.2888 6.78548 14.584 6.78548C18.1926 6.78548 19.1673 10.3858 19.1673 12.6188V19.2855H15.0006V12.6188C15.0006 11.7855 14.584 10.1188 12.9173 10.1188C11.7338 10.1188 10.9005 10.9592 10.4173 11.7449V19.2855H6.66732V6.78548Z" fill={inheritColor ? "inherit" : color ? color : "white"} />
        </svg>

    )
}

export default LinkedIn;