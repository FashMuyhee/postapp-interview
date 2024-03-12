import React from "react";
import { Pressable, Text } from "react-native";

export const Button = ({ btnText, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: "100%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginVertical: 10,
        backgroundColor: "teal",
      }}
    >
      <Text style={{ fontSize: 13, textAlign: "center", color: "white" }}>
        {btnText}
      </Text>
    </Pressable>
  );
};
