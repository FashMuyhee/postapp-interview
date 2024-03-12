import { View } from "react-native";
import React from "react";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import { useAddComment } from "../../../hooks";

export const CommentFooter = ({ postId }) => {
  const [comment, setComment] = React.useState("");
  const addComment = useAddComment({ comment, postId });

  const onSubmit = () => {
    addComment();
    setComment("");
  };

  return (
    <View
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
      }}
    >
      <TextInput
        placeholder="What do you think ?"
        multiline
        value={comment}
        onChange={setComment}
      />
      <Button btnText="Submit" onPress={onSubmit} />
    </View>
  );
};
