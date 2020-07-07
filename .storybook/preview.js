import React from 'react';
import {addDecorator} from '@storybook/react';
import {ThemeProvider} from "styled-components";
import themes from '../src/constants/themes'

addDecorator(story => (
  <ThemeProvider theme={themes}>
    {story()}
  </ThemeProvider>
));
