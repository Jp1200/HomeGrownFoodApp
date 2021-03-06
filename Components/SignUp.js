import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
  Platform,
} from "react-native";
import firebase from "firebase";
import {
  TapGestureHandler,
  State,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { StyleSheetManager } from "styled-components";
import Svg, { Image, Circle, ClipPath } from "react-native-svg";
import Home from "./Homepage";
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
      isSignedIn: false,
      method: "",
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
    console.log(this.state);
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const password = this.state.password;
    const email = this.state.email;
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function (err) {
          alert(err.message);
          console.log("error signing up: ", err.message);
        });
    } catch {}
    await this.setState({ isSignedIn: true });
    // here place your signup logic
  };
  logIn = async () => {
    const password = this.state.password;
    const email = this.state.email;
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    } catch {}
    await this.setState({ isSignedIn: true });
  };

  render() {
    if (this.state.isSignedIn) {
      return (
        <Home state={this.state.isSignedIn} toLogOut={this.onChangeText}></Home>
      );
    } else {
      return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          {/* Image Background carrier */}
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
                onPress={Keyboard.dismiss}
                href={require("../assets/Garden.jpg")}
                height={height + 50}
                width={width}
                preserveAspectRatio="xMidyMid slice"
                clipPath="url(#clip)"
              />
            </Svg>
          </Animated.View>
          {/* Sign up and Login buttons plus forms */}
          <View style={{ height: height / 3, justifyContent: "center" }}>
            <TapGestureHandler onHandlerStateChange={this.onStateChange}>
              <Animated.View
                style={{
                  ...styles.button,
                  opacity: this.buttonOpacity,
                  transform: [{ translateY: this.buttonY }],
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Sign Up
                </Text>
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
                <Text
                  onPress={() => this.setState({ method: "returning" })}
                  style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}
                >
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
              {/* X Button */}
              <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                <Animated.View style={styles.closeButton}>
                  <Animated.Text
                    onPress={Keyboard.dismiss}
                    style={{
                      fontSize: 15,
                      transform: [{ rotate: this.rotateCross }],
                    }}
                  >
                    X
                  </Animated.Text>
                </Animated.View>
              </TapGestureHandler>
              {/* Inputs */}
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              </TouchableWithoutFeedback>
              {/* <TextInput
              style={styles.input}
              placeholder="Phone Number"
              autoCapitalize="none"
              placeholderTextColor="#AFAFAF"
              onChangeText={(val) => this.onChangeText("phone_number", val)}
            /> */}
              <TouchableOpacity underlayColor="#fff" style={styles.btn}>
                <Button
                  onPress={
                    this.state.method == "returning" ? this.logIn : this.signUp
                  }
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
        </KeyboardAvoidingView>
      );
    }
  }
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 20,

    // position: "absolute",
    // width: "100%",
    // bottom: this.state.keyboardOffset,

    marginVertical: 5,
    justifyContent: "center",
    height: 45,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.2)",
    backgroundColor: "white",
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
