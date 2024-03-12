import { View, Text } from "react-native";
import React from "react";

const PostBase = ({ title, content, createdAt, updatedAt, id }) => {
  return (
    <View
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
      <Text style={{ fontSize: 13, color: "#a0a0ac", marginBottom: 10 }}>
        {content}
      </Text>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#a0a0ac",
          marginVertical: 2,
        }}
      />
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 20 }}
      >
        <Text>Like</Text>
        <Text>Comment</Text>
      </View>
    </View>
  );
};

export const Post = React.memo(PostBase);
