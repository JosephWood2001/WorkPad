import React, {useState, useEffect} from "react";
import { Button, Provider as PaperProvider, Text, TextInput } from "react-native-paper";
import theme from "./app/config/theme";
import { Platform, SafeAreaView, StatusBar } from "react-native";
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

