import { api } from "@/components/axios";

interface LoginData{
    email:string;
    password:string;
}

interface SignupData{
    username:string;
    email:string;
    password:string
}

interface AuthResponse{
    token:string;
    userData:{
        username:string;
        id:string;
        email:string
    }
}

//login function

export const login = async(userData:LoginData):Promise<AuthResponse> =>{
try {
    const respone = await api.post<AuthResponse>('/login',userData,{
        withCredentials:true
    })
    return respone.data
} catch (error:any) {
    throw error.response ? error.response.data.message : new Error("Network Error");
}
}
export const signup = async(userData:SignupData):Promise<AuthResponse> =>{
try {
    const respone = await api.post<AuthResponse>('/register',userData,{
        withCredentials:true
    })
    return respone.data
} catch (error:any) {
    throw error.response ? error.response.data.message : new Error("Network Error");
}
}