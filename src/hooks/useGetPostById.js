import React from 'react'
import { useSelector } from 'react-redux'

export const useGetPostById = (id) => {
  const posts = useSelector((state) => state.post.posts);

  const postById = React.useMemo(() => {
    return posts.find((post) => post.id === id)
  }, [id, posts])

  return postById
}