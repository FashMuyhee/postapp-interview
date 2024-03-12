import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { likePost } from "../redux/slices";
import { dateFormat } from "../utils/helper";

const PostBase = ({
  title,
  content,
  createdAt,
  updatedAt,
  id,
  disabled,
  comments,
  likes,
}) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const onNavigatePost = () => {
    navigate("post-by-id", { title, id });
  };

  const onLikePost = () => {
    dispatch(likePost(id));
  };
  return (
    <Pressable
      onPress={onNavigatePost}
      disabled={disabled}
      style={{
        backgroundColor: "white",
        width: "100%",
        borderRadius: 4,
        marginBottom: 10,
        padding: 10,
      }}
    >
      <Text
        style={{ fontSize: 14, fontWeight: "bold", marginBottom: 10 }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <View style={{ marginBottom: 5, rowGap: 10 }}>
        <Text
          numberOfLines={disabled ? undefined : 5}
          style={{ fontSize: 13, color: "#a0a0ac" }}
        >
          {content}
        </Text>
        <Text style={{ fontSize: 12 }}>{`Posted on ${dateFormat(
          createdAt
        )}`}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 20,
          borderTopWidth: 1,
          borderTopColor: "#e4e4e4",
          paddingTop: 5,
        }}
      >
        <Text onPress={onLikePost} style={{ fontSize: 12 }}>{`${
          likes ?? 0
        } Likes`}</Text>
        <Text onPress={onNavigatePost} style={{ fontSize: 12 }}>{`${
          comments ?? 0
        } Comments`}</Text>
      </View>
    </Pressable>
  );
};

export const Post = React.memo(PostBase);
