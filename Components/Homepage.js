import React, { useState, useEffect } from "react";
import FooterPanel from "./FooterPanel.js";
import { AppState, StyleSheet, Text, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Home(props) {
  const [selection, onSelectionChange] = useState("");

  const handleSelectionChange = (selectionName) => {
    onSelectionChange(`${selectionName}`);
  };
  console.log(props);

  if (selection == "profile") {
    return (
      <View>
        <Text>{selection}</Text>
      </View>
    );
  } else if (selection == "postCreation") {
    return (
      <View>
        <Text>{selection}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Neighborhood Garden!</Text>
        <Button
          title="Press to Log out"
          onPress={() => props.toLogOut("isSignedIn", false)}
          color="black"
        ></Button>
        <ScrollView></ScrollView>
        <FooterPanel></FooterPanel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 22,
    backgroundColor: "white",
    borderRadius: 25,
    position: "absolute",
    top: 20,
  },
});
