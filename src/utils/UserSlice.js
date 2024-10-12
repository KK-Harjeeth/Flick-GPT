import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      console.log("addUser payload:", action.payload);
      return action.payload
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});
export const {addUser,removeUser} = UserSlice.actions;
export default UserSlice.reducer;