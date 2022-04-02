import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/'
    })

export const RequestsAPI = {
    post(success: boolean) {
        return instance.post<PostResponseType>('test', {success})

    }
}

type PostResponseType = {
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}
}