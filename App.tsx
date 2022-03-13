import React from "react";
import {Platform, SafeAreaView, View, StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import BottomBar from "./app/pages/MainNavigation";
import HomePage from "./app/pages/HomePage";
import theme from "./app/config/theme";
import MainNavigation from "./app/pages/MainNavigation";

export default function App() {
  console.log("app loaded");

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}>
        <MainNavigation />
      </SafeAreaView>
    </PaperProvider>
  );
}

