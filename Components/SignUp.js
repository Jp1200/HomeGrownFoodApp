import React from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  Easing,
} from "react-native";

import { TapGestureHandler, State } from "react-native-gesture-handler";
import { StyleSheetManager } from "styled-components";

const { width, height } = Dimensions.get("window");
const { Value, timing, interpolate } = Animated;
export default class SignUp extends React.Component {
  constructor() {
    super();
    this.buttonOpacity = new Value(1);
    this.onStateChange = () => {
      timing(this.buttonOpacity, {
        toValue: 0,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }).start();
    };
    this.state = {
      password: "",
      email: "",
    };
    this.buttonY = this.buttonOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });
    this.bgY = this.buttonOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [-height / 3, 0],
    });
    this.textInputZIndex = this.buttonOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [1, -1],
    });
    this.textInputY = this.buttonOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
    });
    this.textInputOpacity = this.buttonOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const { password, email } = this.state;
    try {
      // here place your signup logic
      console.log("user successfully signed up!: ", success);
    } catch (err) {
      console.log("error signing up: ", err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: this.bgY }],
          }}
        >
          <Image
            source={require("../assets/Garden.jpg")}
            style={{ flex: 1, height: null, width: null }}
          />
        </Animated.View>
        <View style={{ height: height / 3, justifyContent: "center" }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign in</Text>
            </Animated.View>
          </TapGestureHandler>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                backgroundColor: "#3E3BEF",
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }],
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
                Log in
              </Text>
            </Animated.View>
          </TapGestureHandler>
          <Animated.View
            style={{
              zIndex: this.textInputZIndex,
              opacity: this.textInputOpacity,
              transform: [{ translateY: this.textInputY }],
              height: height / 3,
              ...StyleSheet.absoluteFill,
              top: null,
              justifyContent: "center",
            }}
          >
            <TextInput
              icon="email"
              style={styles.input}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="#AFAFAF"
              onChangeText={(val) => this.onChangeText("email", val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor="#AFAFAF"
              onChangeText={(val) => this.onChangeText("password", val)}
            />

            {/* <TextInput
              style={styles.input}
              placeholder="Phone Number"
              autoCapitalize="none"
              placeholderTextColor="#AFAFAF"
              onChangeText={(val) => this.onChangeText("phone_number", val)}
            /> */}
            <TouchableOpacity
              underlayColor="#fff"
              onPress={this.signUp}
              style={styles.btn}
            >
              <Button
                color={"#000"}
                title="Sign up"
                style={styles.signupText}
              ></Button>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* <Animated.Text style={[styles.text, { opacity: SignUp.fadeAnim }]}>
          HomeGrown Foods
        </Animated.Text>

         */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 20,

    marginVertical: 5,
    justifyContent: "center",
    height: 45,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.2)",

    borderRadius: 25,
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  btn: {
    height: 60,
    justifyContent: "center",
    marginHorizontal: 25,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 35,

    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fff",
    height: 70,
    marginVertical: 5,
    marginHorizontal: 25,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
