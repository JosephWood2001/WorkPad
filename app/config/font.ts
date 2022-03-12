import * as React from 'react';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import type { Fonts } from 'react-native-paper/lib/typescript/types';

const fontConfig = {
    default: {
      regular: {
        fontFamily: "sans-serif",
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: "sans-serif-medium",
        fontWeight: 'normal',
      },
      light: {
        fontFamily: "sans-serif-light",
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: "sans-serif-thin",
        fontWeight: 'normal',
      },
    } as Fonts,
  };
  export default fontConfig;