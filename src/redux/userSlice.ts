import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../interfaces';

export interface UserState {
	user: User | null;
	isLoading: boolean;
	hasError: boolean;
}

const initialState: UserState = {
	user: null,
	isLoading: false,
	hasError: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUserFetch: (state) => {
			state.isLoading = true;
		},
		getUserSuccess: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
			state.isLoading = false;
		},
		getUserFailure: (state) => {
			state.isLoading = false;
			state.hasError = true;
		},
	},
});

export const { getUserFetch, getUserSuccess, getUserFailure } = userSlice.actions;

export default userSlice.reducer;
