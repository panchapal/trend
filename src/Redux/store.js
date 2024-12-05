// import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import Cartslice from './cartSlice';
export const store=configureStore({
    reducer:{        
        contents:authSlice.reducer,
        productt:Cartslice.reducer
    }
})