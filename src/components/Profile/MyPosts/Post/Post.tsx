import React from "react";
import s from "./Post.module.css"

type PostPropsType = {
    id: string
    date: string
    message: string
    likeCount: number
    deletePost: () => void
}

export function Post(props: PostPropsType) {
    return <div>
        <div className={s.item}>
            <img
                src={"https://drasler.ru/wp-content/uploads/2019/05/Скачать-фото-на-аву-с-котами-в-ВК-подборка-аватарок-30.jpg"}/>
            {props.date}
            <button onClick={props.deletePost}>x</button>
        </div>
        <div>{props.message}</div>
        <div><span>____{props.likeCount} likes____</span></div>
    </div>
}
