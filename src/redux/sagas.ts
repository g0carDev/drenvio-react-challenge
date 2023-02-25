import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import { getRandomUser } from '../api';
import { User } from '../interfaces';
import { GET_USER_FETCH } from './actionTypes';
import { getUserSuccess, getUserFailure } from './userSlice';

function* workUserFetch(action: PayloadAction<string>) {
	try {
		const response: User = yield call(getRandomUser as any, action.payload);
		yield put(getUserSuccess(response));
	} catch (error) {
		yield put(getUserFailure());
	}
}

function* watchAll() {
	yield all([takeEvery(GET_USER_FETCH, workUserFetch)]);
}

export default watchAll;
