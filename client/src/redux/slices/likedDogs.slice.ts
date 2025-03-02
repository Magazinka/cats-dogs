import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Dog {
	message: string,
	status: string,
}

interface LikedDogsState {
	likedDogs: Dog[];
}

const initialState: LikedDogsState = {
	likedDogs: [],
};

export const likedDogsSlice = createSlice({
	name: "likedDogs",
	initialState: initialState,
	reducers: {
		addLikedDog: (state, action: PayloadAction<Dog>) => {
			state.likedDogs.push(action.payload);
			localStorage.setItem("likedDogs", JSON.stringify(state.likedDogs));
		},
		setLikedCats: (state, action: PayloadAction<Dog[]>) => {
			state.likedDogs = action.payload;
		},
	},
});

export const { addLikedDog, setLikedCats } = likedDogsSlice.actions;
export default likedDogsSlice.reducer;
