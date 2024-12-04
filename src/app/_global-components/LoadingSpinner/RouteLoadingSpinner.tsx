'use client';
import React from 'react';
import { Bars } from 'react-loader-spinner';
import colors from "@/base-styles/_exportValues.module.scss";

function RouteLoadingSpinner() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Bars
                height="100"
                width="100"
                color={colors.primary}
                ariaLabel="Route Page Loading"
                visible={true}
            />
        </div>

    )
}

export default RouteLoadingSpinner;