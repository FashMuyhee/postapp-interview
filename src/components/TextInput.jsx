import React from "react";
import { TextInput as RNTextInput, View } from "react-native";

export const TextInput = ({ placeholder, value, onChange, multiline }) => {
  return (
    <RNTextInput
      value={value}
      onChangeText={onChange}
      style={{
        backgroundColor: "#F4F4F4",
        height: multiline ? 100 : 45,
        fontSize: 14,
        color: "#1B1B1B",
        paddingVertical: multiline ? 10 : 0,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: "teal",
        borderRadius: 4,
        paddingHorizontal: 10,
      }}
      placeholder={placeholder}
      multiline={multiline}
      numberOfLines={multiline ? 8 : 1}
      textAlignVertical={multiline ? "top" : "auto"}
    />
  );
};
