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

            marginHorizontal: 40,
          }}
        >
          <Icon
            name="home"
            size={35}
            color="#000"
            onPress={() => {
              console.log("pressed");
              this.props.changeSelect("");
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",

            marginHorizontal: 40,
          }}
        >
          <Icon
            name="plus-square"
            size={35}
            color="#000"
            onPress={() => {
              console.log("pressed");
              this.props.changeSelect("postCreation");
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",

            marginHorizontal: 40,
          }}
        >
          <Icon
            name="user"
            size={43}
            color="#000"
            onPress={() => {
              console.log("pressed");
              this.props.changeSelect("profile");
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
    bottom: 0,

    width: width,
    height: height / 12,
  },
  footerText: {},
});
