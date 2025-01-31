import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../app/shared/COMMENTS";

const initialState = {
  commentsArray: COMMENTS
}
//the state in the following case is only the commentsSlice, not the entire state. just that slice
//for that reason you write state.commentsArray ('state' is allready referencing comments)
const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers:{
    addComment: (state, action)=>{
      console.log('add comment action.payload:', action.payload);
      console.log('add comment state.commentsArray:', state.commentsArray);
      const newComment = {
        id: state.commentsArray.length + 1,
        ...action.payload
      }
      //Redux toolkit implements the Immer Library. Allow for mutating operations on immutable objects
      //this is a convenient sytax. Nothing is actually mutated
      state.commentsArray.push(newComment);
      //Redux toolkit and Immer will handle updating the state in an immutable way with this information
      // Each Function defined in the reducers argument will also have a corresponding action creator function with the same function name

    }
  }
});
//here we are destructuring the addComment action creater function from the commentsSlices action property. This property was created due to createSlice
export const {addComment} = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;

export const selectCommentsByCampsiteId = (campsiteId)=> (state)=>{
  return state.comments.commentsArray.filter((comment)=>comment.campsiteId === parseInt(campsiteId))
};