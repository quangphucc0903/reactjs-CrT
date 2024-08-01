import { request } from "@/config/request";

export const HomeAPI = {
    // getAllUser: async () => {
    //         const response = await request.get('/users')
    //         return response.data
    // },
    CreateUser: async (data) => {
        const response = await request.post('/user/createUser', data)
        return response.data
    },
    getLoginUser: async (address) => {
        const response = await request.get(`/user?address=address${address}`)
        return response.data
    }
}