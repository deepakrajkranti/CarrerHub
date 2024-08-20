import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authslice';

const store = configureStore({
    reducer: {
        auth : authSlice,
    }
});


export default store;