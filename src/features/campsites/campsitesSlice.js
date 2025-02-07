import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { CAMPSITES } from "../../app/shared/CAMPSITES";
import {baseUrl} from "../../app/shared/baseUrl"
import {mapImageURL} from "../../utils/mapImageURL";

//The call to createAsyncThunk() will return into the value of fetchCampsites a type of function that Redux calls a "Redux thunk action creator". We will use this function later to fetch the campsites data in an asynchronous way.
export const fetchCampsites = createAsyncThunk(
'campsites/fetchCampsites',
async ()=>{
  const response = await fetch(baseUrl + 'campsites');
  if(!response.ok){
    return Promise.reject('Unable to fetch, status: '+ response.status);
  }
  const data = await response.json();
  //if you return a value from an async function that is not a promise it will wrap it inside a promise for you with the value that youre trying to return as the promises fulfilled value
  //thats what is happeneing in the following return
  // So you can write code that returns a non promised value from an async function
  //The async function will automatically wrap any return value thats not a promise inside a promise
  return data;
}
);


const initialState = {
  campsitesArray: [],
  isLoading: true,
  errMsg: ''
}
//createSlice is returns an object (that has been configured) after taking in configurator object as an argument
const campsitesSlice = createSlice({
  name:"campsites",
  initialState,
  reducers: {},
  extraReducers:{
    //Is this where promises are consumed?
    [fetchCampsites.pending]: (state)=>{
      state.isLoading = true;
    },
    [fetchCampsites.fulfilled]: (state, action)=>{
      state.isLoading = false;
      state.errMsg = '';
      state.campsitesArray = mapImageURL(action.payload);
    },
    [fetchCampsites.rejected]: (state, action)=>{
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Failed to fetch';
    }
  }
});

export const campsitesReducer = campsitesSlice.reducer;
console.log('campsitesReducer: ' + campsitesReducer);

export const selectAllCampsites = (state)=>{
  console.log(state);
  return state.campsites.campsitesArray;
};


// export const selectRandomCampsite = ()=>{
//   return CAMPSITES[Math.floor(Math.random()*CAMPSITES.length)];
// };
export const selectCampsiteById = (id)=> (state)=>{
  return state.campsites.campsitesArray.find(
    (campsite)=> campsite.id === parseInt(id)
  );
};

export const selectFeaturedCampsite = (state)=>{
  return state.campsites.campsitesArray.find((campsite)=> campsite.featured);
}