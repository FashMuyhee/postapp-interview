import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNav } from "./stack";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default RootNavigator;
