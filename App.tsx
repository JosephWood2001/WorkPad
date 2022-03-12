import React from "react";
import {View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import BottomBar from "./app/pages/BottomBar";
import HomePage from "./app/pages/HomePage";
import theme from "./app/config/theme";

export default function App() {
  console.log("app loaded");

  return (
    <PaperProvider theme={theme}>
      <View style={{flex:10}}><HomePage /></View>
      <View style={{flex:1}}><BottomBar /></View>
    </PaperProvider>
  );
}

