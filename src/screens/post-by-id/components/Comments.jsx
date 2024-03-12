import { View, Text, FlatList } from "react-native";
import React from "react";
import { useGetCommentByPostId } from "../../../hooks";
import { Comment } from "./Comment";

export const Comments = ({ postId }) => {
  const comments = useGetCommentByPostId(postId);

  renderComments = ({ item }) => {
    return <Comment {...item} />;
  };
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={renderComments}
        initialNumToRender={5}
        ListEmptyComponent={
          <View
            style={{
              height: 300,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Be the first to comment</Text>
          </View>
        }
      />
    </View>
  );
};
