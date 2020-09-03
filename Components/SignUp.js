import React from "react";
import {
  Keyboard,
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from "react-native";

import { TapGestureHandler, State } from "react-native-gesture-handler";
import { StyleSheetManager } from "styled-components";
import Svg, { Image, Circle, ClipPath } from "react-native-svg";
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
    this.onCloseState = () => {
      timing(this.buttonOpacity, {
        toValue: 1,
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
      outputRange: [-height / 3 - 50, 0],
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
    this.rotateCross = this.buttonOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [String(180) + "deg", String(360) + "deg"],
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
          <Svg height={height + 50} width={width}>
            <ClipPath id="clip">
              <Circle r={height + 50} cx={width / 2} />
            </ClipPath>
            <Image
              href={require("../assets/Garden.jpg")}
              height={height + 50}
              width={width}
              preserveAspectRatio="xMidyMid slice"
              clipPath="url(#clip)"
            />
          </Svg>
        </Animated.View>
        <View style={{ height: height / 3, justifyContent: "center" }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }],
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign Up</Text>
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
                Log in with Google
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
            <TapGestureHandler onHandlerStateChange={this.onCloseState}>
              <Animated.View style={styles.closeButton}>
                <Animated.Text
                  style={{
                    fontSize: 15,
                    transform: [{ rotate: this.rotateCross }],
                  }}
                >
                  X
                </Animated.Text>
              </Animated.View>
            </TapGestureHandler>
            <TextInput
              icon="email"
              style={styles.input}
              placeholder="EMAIL"
              autoCapitalize="none"
              placeholderTextColor="#AFAFAF"
              onChangeText={(val) => this.onChangeText("email", val)}
            />
            <TextInput
              style={styles.input}
              placeholder="PASSWORD"
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
                title="SIGN UP"
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
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -20,
    left: width / 2 - 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
});
