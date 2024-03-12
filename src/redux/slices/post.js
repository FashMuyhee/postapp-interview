import { createSlice } from '@reduxjs/toolkit'
import { generateUID } from '../../utils/helper'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      const prevPost = state.posts
      state.posts = [...prevPost, { id: generateUID(), ...action.payload }]
    },
  },
})

export const { addPost } = postSlice.actions
export const postReducer = postSlice.reducer;
