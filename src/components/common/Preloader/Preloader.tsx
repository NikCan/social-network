import React from 'react';
import s from "./Preloader.module.css"
import preloader from "../../../assets/images/preloader.png";

type PreloaderPropsType = {}

export function Preloader(props: PreloaderPropsType) {
    return (
        <div>
            <img className={s.preloaderImg} src={preloader}/>
        </div>
    );
}
