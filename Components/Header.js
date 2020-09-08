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

export default class Header extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",

            marginHorizontal: 35,
            position: "absolute",
            left: 0,
          }}
        >
          <Icon
            name="wrench"
            size={20}
            color="#000"
            onPress={() => {
              console.log("pressed");
            }}
          />
        </View>

        <View
          style={{
            justifyContent: "center",

            marginHorizontal: 35,
            position: "absolute",
            right: 0,
          }}
        >
          <Icon
            name="envelope"
            size={20}
            color="#000"
            onPress={() => {
              console.log("pressed");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",

    position: "absolute",
    top: 0,

    width: width,
    height: height / 14,
  },
  footerText: {},
});
