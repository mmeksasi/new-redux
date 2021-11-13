import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/reducers/Counter";

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authentac
  }
});
