import { View, Text } from "react-native";
import React from "react";
import { dateFormat } from "../../../utils/helper";

const CommentBase = ({ comment, createdAt, id }) => {
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
    </View>
  );
};

export const Comment = React.memo(CommentBase);
