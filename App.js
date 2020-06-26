import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import homePage from "./Components/Homepage.js";
export default function App() {
  const [logedIn] = useState("false");

  const handleLogin = function () {
    logedIn.currentState ? logedIn.setState("true") : logedIn.setState("false");
  };
  // Figure out way to change state with hooks and useState react
  if (logedIn) {
    return (
      <>
        <View style={styles.container}>
          <Text>Hello</Text>
          <Text>Welcome to the Fortress</Text>
          <Button
            onPress={handleLogin}
            style={styles.button}
            title="Login"
          ></Button>
          <Button title="Sign Up"></Button>
        </View>
      </>
    );
  } else {
    return <View style={styles.container}>{homePage()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    includeFontPadding: true,
  },
  button: {
    color: "#ffffff",
  },
});
