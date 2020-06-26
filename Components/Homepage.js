import React, { useState, useEffect } from "react";

import { AppState, StyleSheet, Text, View, Button } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>current state is: active</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff000",
    justifyContent: "center",
    alignItems: "center",
  },
});
