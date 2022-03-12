import React from "react";
import { configureFonts, DefaultTheme } from "react-native-paper";
import fontConfig from "./font";

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 30,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4169E1",
    accent: "#f1c40f",
    background: '#F5F5F5',
  },
};

export default theme;