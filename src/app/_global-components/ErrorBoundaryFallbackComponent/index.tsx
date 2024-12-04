'use client';
import React, { useEffect } from 'react';
import s from './errorBoundaryFallbackComponent.module.scss';
import cn from "clsx";
import { SadFaceIcon } from '../icons';

interface PropsTypes {
    error: any,
    resetErrorBoundary: () => void,
    showButton?: boolean,
    errorText?: 'short' | 'long'
}

function ErrorBoundaryFallbackComponent({
    error,
    resetErrorBoundary,
    showButton = true,
    errorText = 'long'
}: PropsTypes) {

    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className={cn(s.wrapper, errorText === 'long' ? s.longError : s.shortError)}>

            <h1>
                {
                    errorText === 'long' ?
                        <>
                            <span>
                                <SadFaceIcon color='red' width={30} height={30} />
                            </span>
                            <span>
                                Ooops somthing broke here, Our Engineers has been notifield.
                            </span>
                        </>
                        :
                        `Ooops Error`
                }

            </h1>
            {
                showButton &&
                <button onClick={resetErrorBoundary}>Click here to Retry</button>
            }

        </div>
    )
}

export default ErrorBoundaryFallbackComponent