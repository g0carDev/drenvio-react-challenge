import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';

const saga = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
	middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
