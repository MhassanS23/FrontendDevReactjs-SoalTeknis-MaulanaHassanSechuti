import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// const api_key = process.env.REACT_APP_MOVIE_API_KEY;
// const base_url = process.env.REACT_APP_BASE_URL;

// export const fetchRestaurants = createAsyncThunk('resto/fetchRestaurants', async () =>{
//     try{
//         const response = await axios.get(`${base_url}/discover/movie?&api_key=${api_key}`);
//         return response.data;
//     } catch(error){
//         console.log(error);
//     }
// });

// export const searchMovie = createAsyncThunk('movies/searchMovie', async (param) =>{
//     try{
//         const response = await axios.get(`${base_url}/search/movie?&api_key=${api_key}&query=${param}`);
//         return response.data;
//     } catch(error){
//         console.log(error);
//     }
// });

// export const detailMovie = createAsyncThunk('movies/detailMovie', async (id) =>{
//     try{
//         const response = await axios.get(`${base_url}/movie/${id}?&api_key=${api_key}`);
//         return response.data;
//     } catch(error){
//         console.log(error);
//     }
// });


const initialState={
    resto: [],
    loading: true, 
    error: null
};

export const resSlice = createSlice({
    name: 'resto',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(fetchRestaurants.pending, (state) => {
        //     state.loading = true;
        // });
        // builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
        //     state.resto = action.payload.results;
        //     state.loading = false;
        // });
        // builder.addCase(fetchRestaurants.rejected, (state) => {
        //     state.loading = false;
        // });
    },
});

export const restoReducer = resSlice.reducer;