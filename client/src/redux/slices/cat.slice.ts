import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCat = createAsyncThunk("axiosCats", async () => {
	try {
		const response = await axios("https://api.thecatapi.com/v1/images/search?size=full");
		if (response.status !== 200) {
			throw Error("Something wrong with axios");
		} else {
			return response.data;
		}
	} catch (error) {
		console.log("Error get AsyncThunk cats: ", error);
		return Promise.reject();
	}
});

export interface Cat {
	id: string;
	url: string;
	width: number;
	height: number;
}

interface initState {
	cats: Cat[];
	isCatLoading: boolean;
}

const initialState: initState = {
	cats: [],
	isCatLoading: false,
};

export const catSlice = createSlice({
	name: "cat",
	initialState: initialState,
	reducers: {},
		extraReducers: builder => {
			builder.addCase(getCat.pending, state => {
				state.isCatLoading = true;
			});

			builder.addCase(getCat.fulfilled, (state, action: PayloadAction<Cat[]>) => {
				state.cats = action.payload;
				state.isCatLoading = false;
			});

			builder.addCase(getCat.rejected, state => {
				state.isCatLoading = false;
			});
		},
	},
);

export default catSlice.reducer;
