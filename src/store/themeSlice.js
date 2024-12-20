import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeMode: false,
    scrollVisibility:true
  },
  reducers: {
    darkMode: (state, action) => {
      state.themeMode = action.payload;
    },
    lightMode: (state, action) => {
      state.themeMode = action.payload;
    },
    changeScrollVisibility : (state,action) => {
        state.scrollVisibility = action.payload
    }
  },
});

export const { darkMode, lightMode,changeScrollVisibility } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
