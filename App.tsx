import React from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import BottomBar from "./app/pages/BottomBar";
import HomePage from "./app/pages/HomePage";
import theme from "./app/config/theme";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <HomePage />
      <BottomBar />
    </PaperProvider>
  );
}

