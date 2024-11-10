import { api } from "@/components/axios";
export interface UserProfile {
    username: string;
    email: string;
    bio: string;
    profailPicture: string;
    friends: string[]; 
  }
  export interface UserPost {
    _id: string;
    content: string;
    author: { username: string };
    createdAt: string;
    
  }
  
  export interface UserProfileResponse {
    userProfail:UserProfile;
    userPost:UserPost[]
  }

  export const viewProfail = async():Promise<UserProfileResponse> =>{
    try {
       const response =  await api.get<UserProfileResponse>('/profail',{
        withCredentials:true
       })
       return response.data
    } catch (error:any) {
        console.log(error)
    }
  }

