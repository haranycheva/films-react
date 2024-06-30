import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./StateSlice";

export const storeAppState = configureStore({ reducer: rootReducer });
