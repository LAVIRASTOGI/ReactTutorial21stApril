import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserService } from "../services";

let initialState = {
  user: null,
  loading: false,
  error: "",
};

export const loginUser = createAsyncThunk("/loginUser", async () => {
  let data = await loginUserService();
  return data;
});

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      return {
        ...state,
        loading: true,
        error: "",
      };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        user: action.payload?.user,
        error: "",
      };
    });
    builder.addCase(loginUser.rejected, (state) => {
      return {
        ...state,
        loading: false,
        error: "somerthing went wrong",
      };
    });
  },
});

export default userSlice.reducer;
