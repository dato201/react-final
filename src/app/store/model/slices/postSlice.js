import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
}

const postSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPosts(state, action) {
      state.data.push(action.payload);
    },
    removeFromPosts(state, action) {
      state.data = state.data.filter(product => product.id !== action.payload.id);
    },
    setPosts(state, action) {
      state.data = action.payload;
    },
    clear(state) {
      state.data = [];
    }
  },
})

export const { actions: cartActions } = postSlice;
export const { reducer: cartReducer } = postSlice;