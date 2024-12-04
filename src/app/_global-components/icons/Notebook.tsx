import React from 'react'
import { IconTypes } from './types'

function Notebook({ width = 16, height = 20, color = "", inheritColor = false }: IconTypes) {
    return (
        <svg width={width} height={height} viewBox="0 0 16 20" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H14C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18V6L10 0H2ZM2 2H9V7H14V18H2V2ZM4 10V12H12V10H4ZM4 14V16H9V14H4Z" fill={inheritColor ? "inherit" : color ? color : "white"} />
        </svg>
    )
}

export default Notebook;