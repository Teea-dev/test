import React from 'react';
import s from './fetchErrorComponent.module.scss';
import { SadFaceIcon } from '@/app/_global-components/icons';

function FetchErrorComponent() {
    return (
        <div className={s.wrapper}>
            <SadFaceIcon color='#b3b3b3' />
            <p>An Error Occurred While trying to fetch this posts, please check your internet connection or try agagin later</p>
        </div>
    )
}

export default FetchErrorComponent