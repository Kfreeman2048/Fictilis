import { config } from '@tamagui/config/v3';

import { 
  Text,
  View,
} from 'react-native';

import {
  color,
  radius,
  size,
  space,
  themes,
  zIndex,
} from '@tamagui/themes';

import { 
  createTamagui, 
  createTokens,
} from '@tamagui/core';

const tokens = createTokens ({
  size,
  space,
  zIndex,
  color:{
    darkRed: '#550000',
    lightRed: '#ff0000',
  },
  radius,
});

const appConfig = createTamagui({
  config,
  themes: {
    dark: {
      red: tokens.color.darkRed,
    },
    light: {
      red: tokens.color.lightRed,
    }
  },
  tokens,
});

export type AppConfig = typeof appConfig;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
};

export default appConfig;