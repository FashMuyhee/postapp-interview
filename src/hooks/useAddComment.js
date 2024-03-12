import React from 'react'
import Toast from "react-native-root-toast";
import { addComment, } from "../redux/slices";
import { useDispatch } from 'react-redux'

export const useAddComment = ({ postId, comment }) => {
  const dispatch = useDispatch()

  const onSubmit = React.useCallback(() => {
    // VALIDATIONS
    if (!comment) {
      ToastContainer.show("Please enter comment content", {
        duration: Toast.durations.LONG,
      });
      return;
    }

    if (!postId) {
      ToastContainer.show("Something went wrong please try again", {
        duration: Toast.durations.LONG,
      });
      return;
    }

    // HANDLE SUBMISSION
    dispatch(addComment({ postId, comment }));
    Toast.show("Comment added successfully", {
      duration: Toast.durations.LONG,
    });
  }, [postId, comment])

  return onSubmit
}