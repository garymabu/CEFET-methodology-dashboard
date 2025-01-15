import 'styled-components';
import { theme } from './withCustomTheme';

type Theme = typeof theme;

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
