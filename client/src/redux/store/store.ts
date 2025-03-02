import { configureStore } from "@reduxjs/toolkit";
import catSlice from "../slices/cat.slice";
import dogSlice from "../slices/dog.slice";

export const store = configureStore({
	reducer: {
		cat: catSlice,
		dog: dogSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
