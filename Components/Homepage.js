import React, { useState, useEffect } from "react";
import FooterPanel from "./FooterPanel.js";
import {
  AppState,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Feed from "./Feed.js";
import Header from "./Header";
export default function Home(props) {
  const [selection, onSelectionChange] = useState("");

  const handleSelectionChange = (selectionName) => {
    onSelectionChange(`${selectionName}`);
  };
  console.log(props);

  if (selection == "profile") {
    return (
      <SafeAreaView style={styles.container}>
        <Header></Header>
        <ScrollView>
          <Text style={styles.text}>{selection}</Text>
        </ScrollView>
        <FooterPanel changeSelect={handleSelectionChange}></FooterPanel>
      </SafeAreaView>
    );
  } else if (selection == "postCreation") {
    return (
      <SafeAreaView style={styles.container}>
        <Header></Header>
        <ScrollView>
          <Text style={styles.text}>{selection}</Text>
        </ScrollView>
        <FooterPanel changeSelect={handleSelectionChange}></FooterPanel>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Welcome to the Neighborhood Garden!</Text>
        <Button
          title="Press to Log out"
          onPress={() => props.toLogOut("isSignedIn", false)}
          color="black"
        ></Button>
        <ScrollView>
          <Feed></Feed>
        </ScrollView>
        <FooterPanel changeSelect={handleSelectionChange}></FooterPanel>
      </SafeAreaView>
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
