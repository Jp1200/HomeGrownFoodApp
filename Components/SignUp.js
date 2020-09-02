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
} from "react-native";

import { TapGestureHandler, State } from "react-native-gesture-handler";
// import Animated from "react-native-reanimated";
const { width, height } = Dimensions.get("window");
const { Value, event, block, cond, eq, set } = Animated;
export default class SignUp extends React.Component {
  constructor() {
    super();
    this.buttonOpacity = new Value(1);
    this.onStateChange = () => {
      this.buttonOpacity.setValue(0);
    };
    this.state = {
      password: "",
      email: "",
      phone_number: "",
    };
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const { password, email, phone_number } = this.state;
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
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require("../assets/Garden.jpg")}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
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
          <View
            style={{
              ...styles.button,
              backgroundColor: "#3E3BEF",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
              Log in
            </Text>
          </View>
        </View>

        {/* <Animated.Text style={[styles.text, { opacity: SignUp.fadeAnim }]}>
          HomeGrown Foods
        </Animated.Text>

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

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor="#AFAFAF"
          onChangeText={(val) => this.onChangeText("phone_number", val)}
        />
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
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 35,
    backgroundColor: "#fffffe",
    shadowOffset: { width: 0, height: 10 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    margin: 10,
    padding: 8,
    color: "black",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    textDecorationLine: "underline",
    color: "black",
    position: "absolute",
    top: 40,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 12,
    fontSize: 32,
    margin: 14,
    padding: 2,
    fontWeight: "800",

    textDecorationStyle: "double",
  },
  btn: {
    width: 100,

    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: "#fff",
    shadowOffset: { width: 0, height: 10 },
    shadowColor: "black",
    shadowOpacity: 0.5,
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
