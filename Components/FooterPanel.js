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

export default class FooterPanel extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#green",
            marginHorizontal: 45,
          }}
        >
          <Icon name="home" size={35} color="#000" />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            marginHorizontal: 45,
          }}
        >
          <Icon name="plus-square" size={35} color="#000" />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            marginHorizontal: 45,
          }}
        >
          <Icon name="user" size={35} color="#000" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",

    position: "absolute",
    bottom: 0,

    width: width,
    height: height / 12,
  },
  footerText: {},
});
