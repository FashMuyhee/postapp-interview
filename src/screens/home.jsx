import { FlatList, Text, View, Dimensions } from "react-native";
import React from "react";
import { Fab, Post, ScreenWrapper } from "../components";
import { useSelector } from "react-redux";

const { height } = Dimensions.get("window");

export const Home = ({ navigation }) => {
  const posts = useSelector((state) => state.post.posts);

  const renderPosts = ({ item }) => {
    return <Post {...item} />;
  };
  return (
    <ScreenWrapper>
      <FlatList
        data={posts}
        renderItem={renderPosts}
        initialNumToRender={15}
        ListEmptyComponent={
          <View
            style={{
              height: height - 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Be the first to add a post</Text>
          </View>
        }
      />
      <Fab onPress={() => navigation.navigate("new-post")} />
    </ScreenWrapper>
  );
};
