import { View, Text, Pressable } from "react-native";
import React from "react";

export const Fab = ({ onPress }) => {
  return (
    <Pressable
      style={{
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "teal",
        elevation: 5,
        borderRadius: 25,
        position: "absolute",
        bottom: 10,
        right: 10,
      }}
      onPress={onPress}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
        +
      </Text>
    </Pressable>
  );
};
