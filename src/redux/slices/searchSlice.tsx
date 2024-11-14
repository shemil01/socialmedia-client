import { api } from "@/components/axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface UserProfile {
  id: string;
  username: string;
  email: string;
  bio: string;
  profilePicture: string | null;
  friends: string[];
}

interface SearchState {
  searchQuery: string;
  searchResults: UserProfile[];
  suggestions: UserProfile[];
  noResults: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SearchState = {
  searchQuery: "",
  searchResults: [],
  suggestions: [],
  noResults: false,
  status: "idle",
  error: null,
};

// Async action to fetch search results
export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query: string) => {
    const response = await api.get(`/search?q=${query}`, {
      withCredentials: true,
    });
    return response.data.user as UserProfile[]; // returning fetched user profiles
  }
);

// Async action to fetch suggestions
export const fetchSuggestions = createAsyncThunk(
  "search/fetchSuggestions",
  async (query: string) => {
    const response = await api.get(`/search?q=${query}`, {
      withCredentials: true,
    });
    return response.data.suggestions as UserProfile[]; // returning fetched suggestions
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearResults: (state) => {
      state.searchResults = [];
      state.suggestions = [];
      state.noResults = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.noResults = action.payload.length === 0;
        state.status = "succeeded";
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to load results";
      })
      .addCase(fetchSuggestions.fulfilled, (state, action) => {
        state.suggestions = action.payload;
      });
  },
});

export const { setSearchQuery, clearResults } = searchSlice.actions;
export default searchSlice.reducer;
