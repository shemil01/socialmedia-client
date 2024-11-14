import { api } from "@/components/axios";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


interface UserProfile {
  id: string;
  username: string;
  email: string;
  bio: string;
  profilePicture: string | null;
  friends: string[];
}

interface Post {
  id: string;
  author: string;
  caption: string;
  postImage:string;
  comments: string[];
  likes: string[];
  createdAt: string;
}

interface UserProfileState {
  userProfile: UserProfile | null;
  userPosts: Post[] | null;
  selectedUserProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserProfileState = {
  userProfile: null,
  userPosts: null,
  selectedUserProfile: null,
  loading: false,
  error: null,
};


//fetch own profail
export const fetchProfile = createAsyncThunk("user/fetchProfaile",async () => {
  const response = await api.get(`/profail`)
  return response.data as { userProfile: UserProfile; userPosts: Post[] };
}) 

// Thunk for editing own profile
export const editUserProfile = createAsyncThunk(
    'userProfile/editUserProfile',
    async (updatedProfile: Partial<UserProfile>) => {
      const response = await api.put('/edit/profile', updatedProfile);
      return response.data.userProfile as UserProfile;
    }
  );
  
  // Thunk for viewing another user’s profile
  export const fetchUserById = createAsyncThunk(
    'userProfile/fetchUserById',
    async (userId: string) => {
      const response = await api.get(`/users/profile/${userId}`);
      return response.data.userProfile as UserProfile;
    }
  );
  

  const userProfileSlice = createSlice({
    name: 'userProfail',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchProfile.pending,(state)=> {
            state.loading = true
        });
        builder.addCase(fetchProfile.fulfilled,(state,action:payloadAction<{ userProfile: UserProfile; userPosts: Post[] }>)=>{
            state.loading = false;
            state.userProfile = action.payload.userProfile
            state.userPosts = action.payload.userPosts;
        });
        builder.addCase(fetchProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Could not fetch profile';
          });

          //Handle edit profail
          builder.addCase(editUserProfile.pending,(state)=>{
            state.loading = true;

          })
          builder.addCase(editUserProfile.fulfilled,(state,action:PayloadAction<UserProfile>)=>{
            state.loading = false;
            state.userProfile = action.payload
          })
          builder.addCase(editUserProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Could not edit profile';
          });
    }
  })

  export default userProfileSlice.reducer;