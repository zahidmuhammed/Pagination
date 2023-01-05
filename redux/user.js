import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userDatas: [],
};

export const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		getUserData: (state, action) => {
			state.userDatas = action.payload;
		},
	},
});

export const { getUserData } = userSlice.actions;

export default userSlice.reducer;
