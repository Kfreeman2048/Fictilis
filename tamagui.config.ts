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
  color,
  radius,
});

const appConfig = createTamagui({
  config,
  themes,
  tokens,
});

export type AppConfig = typeof appConfig;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
};

export default appConfig;