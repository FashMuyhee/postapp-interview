import { createStackNavigator } from "@react-navigation/stack";
import { AddPost, Home, PostById } from "../screens";

const Stack = createStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "teal",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen
        name="post-by-id"
        component={PostById}
        options={({
          route: {
            params: { title },
          },
        }) => ({
          title,
        })}
      />
      <Stack.Screen
        name="new-post"
        component={AddPost}
        options={{ title: "New Post" }}
      />
    </Stack.Navigator>
  );
};
