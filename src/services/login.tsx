import { api } from "../api";

export const login = async (email: string, password: string): Promise<Object> => {
    const data: any = await api;
    
    if(!data || email !== data.email || password !== data.password) {
        return {};
    }

    return data;
}