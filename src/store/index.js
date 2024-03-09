import { configureStore } from "@reduxjs/toolkit";
import facialFeatures from "./facialFeature";
import authSlice from "./authSlice";
const siteStore = configureStore({
  reducer: {
    facialFeature:facialFeatures.reducer,
    auth:authSlice.reducer,
  },
});
export default siteStore;