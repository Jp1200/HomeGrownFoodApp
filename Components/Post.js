import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
export default class Post extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    console.log("beign used");
    return (
      <View style={styles.containerPostImage}>
        <Text style={{ fontSize: 30, color: "#000" }}>{this.props.user}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerPostImage: {
    flex: 1,
    justifyContent: "center",
    width: width,
    height: width,
    backgroundColor: "orange",
  },
  userStuff: {
    backgroundColor: "#fff",
  },
});
