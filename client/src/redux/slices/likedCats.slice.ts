import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Cat {
	id: number;
	url: string;
	width: number;
	height: number;
}

interface LikedCatsState {
	likedCats: Cat[];
}

const initialState: LikedCatsState = {
	likedCats: [],
};

export const likedCatsSlice = createSlice({
	name: "likedCats",
	initialState: initialState,
	reducers: {
		addLikedCat: (state, action: PayloadAction<Cat>) => {
			state.likedCats.push(action.payload);
			localStorage.setItem("likedCats", JSON.stringify(state.likedCats));
		},
		setLikedCats: (state, action: PayloadAction<Cat[]>) => {
			state.likedCats = action.payload;
		},
	},
});

export const { addLikedCat, setLikedCats } = likedCatsSlice.actions;
export default likedCatsSlice.reducer;
