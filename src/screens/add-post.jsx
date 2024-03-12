import React from "react";
import { Button, ScreenWrapper, TextInput } from "../components";
import Toast from "react-native-root-toast";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/slices";

export const AddPost = ({ navigation }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const dispatch = useDispatch();

  const onSubmit = () => {
    // FORM VALIDATION
    if (!title) {
      Toast.show("Title is required", {
        duration: Toast.durations.LONG,
      });
      return;
    }
    if (!content) {
      Toast.show("Content is required", {
        duration: Toast.durations.LONG,
      });
      return;
    }
    // HANDLE POST
    dispatch(addPost({ title, content }));
    Toast.show("Post added successfully", {
      duration: Toast.durations.LONG,
    });
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
