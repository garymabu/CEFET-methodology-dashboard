"use client"

import { ThemeProvider as SCThemeProvider } from 'styled-components';
import colors from './colors/colors';
import sizes from './sizes/sizes';
import { ReactDefaultProps } from '../interfaces/util/reactProps';

export const theme = {
  colors,
  sizes,
};

export const ThemeProvider = ({children}:ReactDefaultProps) => {
  return (
    <SCThemeProvider theme={theme}>
      {children}
    </SCThemeProvider>
  )
};