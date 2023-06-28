import { createSlice } from "@reduxjs/toolkit";

interface IState {
  darkMode: boolean;
}

const initialState: IState = {
  darkMode: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setDarkMode } = generalSlice.actions;
export default generalSlice.reducer;
