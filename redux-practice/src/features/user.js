//createSlice allows you to create your REDUCER in a easy way. Split logic intuitively.
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: "", email: "" };

//Create a userSlice
export const userSlice = createSlice({
  //pass the name of the slice which is the same as the state
  name: "user",
  //Intial value of the state is an object
  initialState: { value: initialStateValue },
  reducers: {
    //The different funciton we might want to use (reducers:)
    login: (state, action) => {
      //Do something with the state (change its value)
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

// Export the actions we want to create
export const { login, logout } = userSlice.actions;

// Export to have the information in something else
export default userSlice.reducer;
