import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
