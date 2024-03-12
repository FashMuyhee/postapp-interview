import React from "react";
import { Button, ScreenWrapper, TextInput } from "../components";
import { useAddPost } from "../hooks";

export const AddPost = ({ navigation }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const addPost = useAddPost({ content, title });

  const onSubmit = () => {
    addPost();
    navigation.goBack();
  };

  return (
    <ScreenWrapper>
      <TextInput placeholder="Title" value={title} onChange={setTitle} />
      <TextInput
        placeholder="Content"
        multiline
        value={content}
        onChange={setContent}
      />
      <Button btnText="Submit" onPress={onSubmit} />
    </ScreenWrapper>
  );
};
