import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pcComponents: [],
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const newComponent = action.payload;
      
      const existingComponent = state.pcComponents.find(
        (component) => component.Category === newComponent.Category
      );

      if (!existingComponent) {
        state.pcComponents.push(newComponent);
      }
    },
  },
});

export const { addComponent } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
