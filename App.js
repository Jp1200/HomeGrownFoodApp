//  @refresh reset
import React, { useState, useEffect } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ImageBackground,
  Alert,
} from "react-native";
import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCpb6Rbbpbh0Z8VB9LGbEdnH9-_yQLMRtc",
  authDomain: "homegrownfood-713ba.firebaseapp.com",
  databaseURL: "https://homegrownfood-713ba.firebaseio.com",
  projectId: "homegrownfood-713ba",
  storageBucket: "homegrownfood-713ba.appspot.com",
  messagingSenderId: "1040056880701",
  appId: "1:1040056880701:web:2c57ec0ea9c1a7ca502454",
  measurementId: "G-7ZR1XJRDQW",
};
// Initialize Firebase
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
}

import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import HomePage from "./Components/Homepage.js";
import SignUp from "./Components/SignUp.js";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require("./assets/Garden.jpg")]);
    await Promise.all([...imageAssets]);
  }
  // Figure out way to change state with hooks and useState react
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => {
            this.setState({ isReady: true });
          }}
          onError={console.warn}
        />

        // <View style={styles.container}>

        //   <Text onPress={() => handleSignUp(true)} style={styles.login}>
        //     Already a user... Sign In
        //   </Text>

        // </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SignUp> </SignUp>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FCFFFD",
  },
  login: {
    alignSelf: "center",
    fontSize: 10,
    color: "#000",
  },
});

// const StyledSafeArea = styled.SafeAreaView`

// `;
// const StyledView = styled.View`
//   border-radius: 10px;
//   box-shadow: 3px 3px 15px #000;
//   margin: 10px;
//   padding: 3px;
// `;
// const StyledText = styled.Text`
//   color: #ffffff;
//   font-size: 28px;
//   font-weight: 500;
//   margin-bottom: 5px;
// `;
// const StyledLogin = styled.View`
//   align: right;
//   font-size: 16px;
//   color: #ffffff;
// `;
// const StyledImage = styled.ImageBackground`
//   flex: 1;
//   resize-mode: cover;
//   justify-content: center;
// `;
