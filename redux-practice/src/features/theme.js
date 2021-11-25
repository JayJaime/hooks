//createSlice allows you to create your REDUCER in a easy way. Split logic intuitively.
import { createSlice } from "@reduxjs/toolkit";

//Create a userSlice
export const themeSlice = createSlice({
  //pass the name of the slice which is the same as the state
  name: "theme",
  //Intial value of the state is an object
  initialState: { value: "" },
  reducers: {
    //The different funciton we might want to use (reducers:)
    changeTheme: (state, action) => {
      //Do something with the state (change its value)
      state.value = action.payload;
    },
  },
});

// Export the actions we want to create
export const { changeTheme } = themeSlice.actions;

// Export to have the information in something else
export default themeSlice.reducer;
