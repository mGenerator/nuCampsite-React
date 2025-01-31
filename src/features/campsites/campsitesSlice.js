import { createSlice } from "@reduxjs/toolkit";
import { CAMPSITES } from "../../app/shared/CAMPSITES";


const initialState = {
  campsitesArray: CAMPSITES
}
//createSlice is returns an object (that has been configured) after taking in configurator object as an argument
const campsitesSlice = createSlice({
  name:"campsites",
  initialState
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