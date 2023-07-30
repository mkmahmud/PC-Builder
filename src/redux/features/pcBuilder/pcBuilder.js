import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pcComponents: [],
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      state.pcComponents.push(action.payload);
    },
  },
});



export const { addComponent } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
