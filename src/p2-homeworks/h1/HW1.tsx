import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";


export type messageDataAlternativeType = {
    avatar: string
    name: string
    message: string
    time: string
}
export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const messageData: MessageDataType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text some text some text some text some text some text some text some text',
    time: '22:00',
}
export const messageDataAlternative: messageDataAlternativeType = {
    avatar: 'https://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg',
    name: 'Alternative',
    message: 'some text some text some text some text some text',
    time: '22:10'
}

export function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={messageDataAlternative.avatar}
                name={messageDataAlternative.name}
                message={messageDataAlternative.message}
                time={messageDataAlternative.time}
            />

            <hr/>
        </div>
    )
}


