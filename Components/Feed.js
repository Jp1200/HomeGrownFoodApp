import React from "react";

import {
  AppState,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from "react-native";
import Post from "./Post.js";
const { width, height } = Dimensions.get("window");
export default class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [{ user: "Carl Wheezer" }],
    };
  }
  render() {
    const posts = this.state.posts.forEach((post, index) => {
      console.log(post, index);
      return;
    });
    console.log(posts);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {posts}
        <Post key={0} user={this.state.posts[0].user} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerPost: {
    flex: 1,
    justifyContent: "center",
    width: width,
    height: height / 3,
    backgroundColor: "orange",
  },
});
