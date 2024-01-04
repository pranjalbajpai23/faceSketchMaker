import { createSlice } from "@reduxjs/toolkit";

const facialFeatures = createSlice({
  name: "facialFeatures",
  initialState:"head",
  reducers: {
    setCategory: (state, action) => {
        return action.payload;
    },
  },
});



export const ffActions = facialFeatures.actions;
export default facialFeatures;
