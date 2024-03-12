import { FlatList } from "react-native";
import React from "react";
import { Fab, Post, ScreenWrapper } from "../components";
import { useSelector } from "react-redux";

const postsDemo = [
  {
    title: "Baking the Perfect Pie Crust",
    content:
      "In this post, I'll share my secrets for making a flaky and delicious pie crust that will elevate any dessert.",
    created_at: "2024-03-11 10:00:00",
    updated_at: null,
  },
  {
    title: "Top 5 Hiking Trails for Beginners",
    content:
      "Looking to explore the outdoors but don't know where to start? Check out these beginner-friendly hiking trails that offer stunning scenery without a challenging climb.",
    created_at: "2024-03-10 15:30:00",
    updated_at: null,
  },
  {
    title: "Must-Have Apps for Bookworms",
    content:
      "Are you an avid reader? Here's a list of essential apps that will enhance your reading experience, from finding new books to tracking your progress.",
    created_at: "2024-03-09 12:45:00",
    updated_at: "2024-03-11 18:00:00",
  },
  {
    title: "The Science Behind Sleep",
    content:
      "Why do we need sleep? What happens to our bodies when we don't get enough rest? Learn about the fascinating science of sleep and tips for getting a good night's rest.",
    created_at: "2024-03-08 09:15:00",
    updated_at: null,
  },
  {
    title: "DIY Cat Tree on a Budget",
    content:
      "Spoil your feline friend without breaking the bank! This post provides a step-by-step guide on building a fun and functional cat tree using affordable materials.",
    created_at: "2024-03-07 17:00:00",
    updated_at: null,
  },
];

export const Home = ({ navigation }) => {
  const posts = useSelector((state) => state.post.posts);

  const renderPosts = ({ item }) => {
    return <Post {...item} />;
  };
  return (
    <ScreenWrapper>
      <FlatList data={posts} renderItem={renderPosts} />
      <Fab onPress={() => navigation.navigate("new-post")} />
    </ScreenWrapper>
  );
};
