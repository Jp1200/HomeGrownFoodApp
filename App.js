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
import { Asset, AppLoading } from "expo-asset";

import HomePage from "./Components/Homepage.js";
import SignUp from "./Components/SignUp.js";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image.downloadAsync());
    }
  });
}
export default function App() {
  const [isReady, loadingFunc] = useState(false);

  const [logedIn, handleLogin] = useState(false);
  const [signUp, handleSignup] = useState(true);
  const handleForm = function () {};

  async function _loadAssetsAsync() {
    const imageAssets = cacheImages([require("./assets/Garden.jpg")]);
    await Promise.all([...imageAssets]);
  }
  // Figure out way to change state with hooks and useState react
  if (!isReady) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => {
          loadingFunc(true);
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
