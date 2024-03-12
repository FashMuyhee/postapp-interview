import { createSlice } from '@reduxjs/toolkit'
import { generateUID } from '../../utils/helper'
import Toast from "react-native-root-toast";

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    comments: [],
  },
  reducers: {
    addPost: (state, action) => {
      const prevPost = state.posts
      state.posts = [...prevPost, { id: generateUID(), ...action.payload, likes: 0, comments: 0, createdAt: Date.now(), updatedAt: null }]
    },
    likePost: (state, action) => {
      const posts = state.posts
      const postIndex = posts.findIndex(post => post.id === action.payload);
      if (postIndex !== -1) {
        // Update the likes count for the specific post
        const updatedPosts = [...posts];
        const post = updatedPosts[postIndex]
        if (post.likes > 0) {
          updatedPosts[postIndex].likes -= 1;
          updatedPosts[postIndex].updatedAt = new Date().toISOString();
          Toast.show("Unlike Successfully", {
            duration: Toast.durations.LONG,
          });
        } else {
          updatedPosts[postIndex].likes += 1;
          updatedPosts[postIndex].updatedAt = new Date().toISOString();
          Toast.show("Like Successfully", {
            duration: Toast.durations.LONG,
          });
        }
        // Update the state with the modified posts array
        state.posts = updatedPosts
      } else {
        console.error("Post with ID", postId, "not found");
      }
    },
    addComment: (state, action) => {
      const posts = state.posts
      const postIndex = posts.findIndex(post => post.id === action.payload.postId);
      if (postIndex !== -1) {
        // Update the comment count for the specific post
        const updatedPosts = [...posts];
        updatedPosts[postIndex].comments += 1;
        const prevComments = state.comments
        state.comments = [...prevComments, { id: generateUID(), ...action.payload, createdAt: Date.now() }]
        state.posts = updatedPosts
        Toast.show("Comment Added Successfully", {
          duration: Toast.durations.LONG,
        });
      }
    },
  },
})

export const { addPost, likePost, addComment } = postSlice.actions
export const postReducer = postSlice.reducer;
