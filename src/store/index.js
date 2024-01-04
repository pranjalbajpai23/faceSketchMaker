import { configureStore } from "@reduxjs/toolkit";
import facialFeatures from "./facialFeature";
const siteStore = configureStore({
  reducer: {
    facialFeature:facialFeatures.reducer,
  },
});
export default siteStore;