import React from 'react'
import Toast from "react-native-root-toast";
import { addPost } from "../redux/slices";
import { useDispatch } from 'react-redux'

export const useAddPost = ({ title, content }) => {
  const dispatch = useDispatch()

  const onSubmit = React.useCallback(() => {

    if (!title) {
      Toast.show("Title is required", {
        duration: Toast.durations.LONG,
      });
      return;
    }
    if (!content) {
      Toast.show("Content is required", {
        duration: Toast.durations.LONG,
      });
      return;
    }
    // HANDLE POST
    dispatch(addPost({ title, content }));
    Toast.show("Post added successfully", {
      duration: Toast.durations.LONG,
    });
  }, [title, content])

  return onSubmit
}