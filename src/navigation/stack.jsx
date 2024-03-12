import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";

const Stack = createStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};
