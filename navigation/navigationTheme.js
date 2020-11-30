import { DefaultTheme } from '@react-navigation/native';

import Colors from '../utils/colors';

const navigationTheme = {
  ...DefaultTheme,
  // override colors
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    text: Colors.black,
    border: Colors.secondary,
    background: Colors.white
  }
};

export default navigationTheme;
