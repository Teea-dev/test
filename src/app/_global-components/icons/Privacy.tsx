import React from 'react'
import { IconTypes } from './types'

function Privacy({ width = 24, height = 30, color = "", inheritColor = false }: IconTypes) {
    return (
        <svg width={width} height={height} viewBox="0 0 24 30" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4071 2.32678L12 2.14533L11.5929 2.32678L2.25956 6.48678L1.66667 6.75104V7.40016V13.9602C1.66667 16.4181 2.38767 18.8913 3.59387 21.0482L4.1503 22.0433L5.06433 21.3619C6.01526 20.653 7.336 20.1377 8.67223 19.8016C10.001 19.4675 11.2521 19.3335 12 19.3335C12.7479 19.3335 13.999 19.4675 15.3278 19.8016C16.664 20.1377 17.9847 20.653 18.9357 21.3619L19.8497 22.0433L20.4061 21.0482C21.6123 18.8913 22.3333 16.4181 22.3333 13.9602V7.40016V6.75104L21.7404 6.48678L12.4071 2.32678ZM18.8189 23.414L19.4404 22.6421L18.6742 22.0136C17.93 21.4032 16.7952 20.9098 15.6433 20.5695C14.4717 20.2233 13.1618 20.0002 12 20.0002C10.838 20.0002 9.53121 20.2234 8.36126 20.5696C7.20973 20.9103 6.07837 21.4032 5.33006 22.0102L4.55619 22.6379L5.18111 23.414C6.93087 25.5871 9.22053 27.2989 11.7441 27.9669L12 28.0346L12.2559 27.9669C14.7795 27.2989 17.0691 25.5871 18.8189 23.414ZM1 13.6668V6.3167L12 1.42781L23 6.3167V13.6668C23 20.5608 18.2754 26.9732 12 28.635C5.72461 26.9732 1 20.5608 1 13.6668ZM9.40728 9.0741C10.0949 8.38647 11.0275 8.00016 12 8.00016C12.9725 8.00016 13.9051 8.38647 14.5927 9.0741C15.2804 9.76174 15.6667 10.6944 15.6667 11.6668C15.6667 12.6393 15.2804 13.5719 14.5927 14.2596C13.9051 14.9472 12.9725 15.3335 12 15.3335C11.0275 15.3335 10.0949 14.9472 9.40728 14.2596C8.71964 13.5719 8.33333 12.6393 8.33333 11.6668C8.33333 10.6944 8.71964 9.76174 9.40728 9.0741ZM14.1213 9.54551C13.5587 8.9829 12.7956 8.66683 12 8.66683C11.2044 8.66683 10.4413 8.9829 9.87868 9.54551C9.31607 10.1081 9 10.8712 9 11.6668C9 12.4625 9.31607 13.2255 9.87868 13.7881C10.4413 14.3508 11.2044 14.6668 12 14.6668C12.7956 14.6668 13.5587 14.3508 14.1213 13.7881C14.6839 13.2255 15 12.4625 15 11.6668C15 10.8712 14.6839 10.1081 14.1213 9.54551Z" stroke={inheritColor ? "inherit" : color ? color : "white"} strokeWidth="2" />
        </svg>
    )
}

export default Privacy;