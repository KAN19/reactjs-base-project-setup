import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorObjectType, get } from 'helpers/api';
import { APIPaths } from 'helpers/api/path';
import { parseQuery } from 'helpers/function';
import { ListResponseType, QueryType } from 'helpers/types';
import BaseInitialState from 'models/baseInitalState';
import { DefectModel } from 'models/defect';
import { AppRootState } from 'stores';

interface Test extends BaseInitialState {
	user: string;
}

const initialState: Test = {
	user: '',
	status: 'idle',
};

export type DefectsQueryType = QueryType<DefectModel> & { projectId?: string };

export const fetchDefects = createAsyncThunk(
	'test/fetchDefects',
	async (query: DefectsQueryType, { dispatch, rejectWithValue }) => {
		try {
			const response = await get<ListResponseType<DefectModel>>(
				parseQuery(APIPaths.defect.list, { ...query }),
				{ baseURL: process.env.REACT_APP_DEFECT_URL }
			);
			return response.data;
		} catch (error) {
			const message = (error as ErrorObjectType)?.message;
			return rejectWithValue(message);
		}
	}
);

const userSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		setTestValue(state, action: PayloadAction<Test>) {
			state.user = action.payload.user;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDefects.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchDefects.fulfilled, (state, action) => {
				state.status = 'succeeded';
			})
			.addCase(fetchDefects.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const selectUser = (state: AppRootState) => state.testSlice.user;

export const { setTestValue: setUser } = userSlice.actions;
export default userSlice.reducer;
