import { View, Text } from "react-native";
import React from "react";

export const ScreenWrapper = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        paddingHorizontal: 15,
        paddingTop: 15,
        backgroundColor: "#f4f4f4",
      }}
    >
      {children}
    </View>
  );
};
