import React from 'react'
import { useSelector } from 'react-redux'

export const useGetCommentByPostId = (id) => {
  const comments = useSelector((state) => state.post.comments);

  const commentByByPostId = React.useMemo(() => {
    return comments?.filter((comment) => comment.postId === id);
  }, [id, comments])

  return commentByByPostId
}