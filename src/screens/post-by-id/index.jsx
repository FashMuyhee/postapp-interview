import React from "react";
import { useGetPostById } from "../../hooks";
import { Text } from "react-native";
import { CommentFooter, Comments } from "./components";
import { Post, ScreenWrapper } from "../../components";

export const PostById = ({ route }) => {
  const { id } = route.params;
  const post = useGetPostById(id);

  return (
    <ScreenWrapper>
      <Post {...post} disabled />
      {/* COMMENTS */}
      <Comments postId={id} />
      <CommentFooter postId={id} />
    </ScreenWrapper>
  );
};
