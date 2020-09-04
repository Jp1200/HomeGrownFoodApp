import React from "react";

import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class FooterPanel extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Button title="Profile"></Button>
          <Button title="+"></Button>
          <Button title="XD"></Button>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: width,
    height: height / 12,
  },
});
