import React, { useState, useEffect } from "react";

import { AppState, StyleSheet, Text, View, Button } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>current state is: active</Text>
      <Button
        title="Press to Log out"
        onPress={() => props.hL(false)}
        color="black"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
