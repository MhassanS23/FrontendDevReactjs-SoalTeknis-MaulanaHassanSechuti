import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const base_url = process.env.REACT_APP_BASE_URL;

export const fetchRestaurants = createAsyncThunk('resto/fetchRestaurants', async () =>{
    try{
        const response = await axios.get(`${base_url}/list`);
        return response.data.restaurants;
    } catch(error){
        console.log(error);
    }
});

export const searchRestaurants = createAsyncThunk('resto/searchRestaurants', async (param) =>{
    try{
        const response = await axios.get(`${base_url}/search?q=${param}`);
        return response.data.restaurants;
    } catch(error){
        console.log(error);
    }
});

export const detailRestaurants = createAsyncThunk('resto/detailRestaurants', async (id) =>{
    try{
        const response = await axios.get(`${base_url}/detail/${id}`);
        return response.data.restaurant;
    } catch(error){
        console.log(error);
    }
});


const initialState={
    resto: [],
    detail: [],
    search: [],
    loading: true, 
    error: null
};

export const resSlice = createSlice({
    name: 'resto',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurants.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
            state.resto = action.payload || [];
            state.loading = false;
        });
        builder.addCase(fetchRestaurants.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(detailRestaurants.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(detailRestaurants.fulfilled, (state, action) => {
            state.detail = action.payload;
            state.loading = false;
        });
        builder.addCase(detailRestaurants.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(searchRestaurants.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(searchRestaurants.fulfilled, (state, action) => {
            state.search = action.payload;
            state.loading = false;
        });
        builder.addCase(searchRestaurants.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const restoReducer = resSlice.reducer;