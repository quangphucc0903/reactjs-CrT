import { request } from "@/config/request";
import { requestJson } from "@/config/requestJson";

export const HomeAPI = {
    getAddressUser: async () => {
            const response = await requestJson.get('/users')
            return response.data
    },
    CreateUser: async (data) => {
        const response = await request.post('/user/createUser', data)
        return response.data
    },
    getUser: async (address) => {
        const response = await request.get(`/user?address=${address}`)
        return response.data
    }
}