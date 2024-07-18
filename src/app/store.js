import { configureStore } from '@reduxjs/toolkit';
import { restoReducer } from '../features/restaurant/restaurantSlice.js';

export const store = configureStore ({
    reducer: {
        resto: restoReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});