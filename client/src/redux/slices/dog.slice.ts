import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";

export const getDog = createAsyncThunk("axiosDogs", async () => {
	try {
		const response = await axios("https://dog.ceo/api/breeds/image/random");
		if (response.status !== 200) {
			throw Error("Something wrong with axios");
		} else {
			return response.data;
		}
	} catch (error) {
		console.log("Error get AsyncThunk dogs: ", error);
		return Promise.reject();
	}
});
export interface Dog {
	message: string,
	status: string,
}

interface initState {
	dogs: Dog[];
	isDogLoading: boolean;
}

const initialState: initState = {
	dogs: [],
	isDogLoading: false,
};

export const dogSlice = createSlice({
	name: 'dog',
	initialState: initialState,
	reducers:{},
	extraReducers: builder => {
				builder.addCase(getDog.pending, state => {
					state.isDogLoading = true;
				});
	
				builder.addCase(getDog.fulfilled, (state, action: PayloadAction<Dog[]>) => {
					state.dogs = action.payload;
					state.isDogLoading = false;
				});
	
				builder.addCase(getDog.rejected, state => {
					state.isDogLoading = false;
				});
	}
})

export default dogSlice.reducer