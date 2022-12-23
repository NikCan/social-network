import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "08432b91-d4bc-4747-ad4e-b220e331fd94"
    }
})

export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(res => res.data)
}

export const follow = (id: string) => {
    return instance.post(`follow/${id}`)
        .then(res => res.data)
}

export const unfollow = (id: string) => {
    return instance.delete(`follow/${id}`)
        .then(res => res.data)
}

export const me = () => {
    return instance.get('auth/me')
        .then(res => res.data)
}