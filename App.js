import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello</Text>
        <Text>Welcome to the Future of Gardening</Text>
        <Button style={styles.button} title="Login"></Button>
        <Button title="Sign Up"></Button>
      </View>
    </>
  );
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
