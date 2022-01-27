import React from 'react'
import Message from "./Message";

export const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text some text some text some text some text some text some text some text',
    time: '22:00',
}
/*export const messageDataAlternative = {
    avatar: 'https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/05/9ddf0e8ecb668eb14c24bb4d58aa1edf.jpg',
    name: 'Alternative Name',
    message: 'some text some text some text some text some text some text some text',
    time: '22:10'
}*/


export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function HW1(props: MessageDataType) {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={props.avatar}
                name={props.name}
                message={props.message}
                time={props.time}
            />


            <hr/>
           {/* <Message
                avatar={messageDataAlternative.avatar}
                name={messageDataAlternative.name}
                message={messageDataAlternative.message}
                time={messageDataAlternative.time}
            />*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}


/*
export class HW1 {
}*/

