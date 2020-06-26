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
import styled from "styled-components/native";
import HomePage from "./Components/Homepage.js";
export default function App() {
  const [logedIn, handleLogin] = useState(false);

  const handleForm = function () {};
  // Figure out way to change state with hooks and useState react
  if (!logedIn) {
    return (
      <>
        <StyledImage
          overlayColor="#17e268"
          source={require("./assets/Garden.jpg")}
        >
          <StyledView>
            <StyledText>Home Grown Foods</StyledText>
            <Button
              onPress={() => handleLogin(true)}
              color="white"
              title="Login"
            ></Button>
            <Button
              title="Sign Up"
              color="white"
              onPress={() => Alert.alert("Signing up...")}
            ></Button>
          </StyledView>
        </StyledImage>
      </>
    );
  } else {
    return (
      <StyledSafeArea>
        <HomePage hL={handleLogin} />
      </StyledSafeArea>
    );
  }
}
const StyledSafeArea = styled.SafeAreaView`
  justify-content: center;
  flex: 1;
`;
const StyledView = styled.View`
  border-radius: 10px;
  box-shadow: 3px 3px 15px #000;
  margin: 10px;
  padding: 3px;
  align-items: center;
  justify-content: center;
`;
const StyledText = styled.Text`
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 5px;
`;
const StyledLogin = styled.View`
  align: right;
  font-size: 16px;
  color: #ffffff;
`;
const StyledImage = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  justify-content: center;
`;
