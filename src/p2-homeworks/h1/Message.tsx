import React from 'react'
import v from './Message.module.css'
import {messageData} from "./HW1";

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessageType) {
    return (
        <div className={v.messages}>
            <div className={v.messagesItem}>
                <img className={v.avatar} src={props.avatar}/>
                <div className={v.name}>{props.name}</div>
                <div className={v.message}>{props.message}</div>
                <span className={v.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
