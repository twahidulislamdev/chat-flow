import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Mern Stack Developer",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginInfo: (state) => {
      console.log(state);
      
    },
    
  },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;
