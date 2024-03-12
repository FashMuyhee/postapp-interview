import React from "react";
import { useGetPostById } from "../../hooks";
import { Text } from "react-native";
import { CommentFooter } from "./components";
import { Post, ScreenWrapper } from "../../components";

export const PostById = ({ route }) => {
  const { id } = route.params;
  const post = useGetPostById(id);

  return (
    <ScreenWrapper>
      <Post {...post} disabled />
      <Text style={{ paddingVertical: 5 }}>Comments</Text>
      {/* COMMENTS */}
      <CommentFooter postId={id} />
    </ScreenWrapper>
  );
};
