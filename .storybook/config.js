import React from "react";
import { configure } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { addDecorator } from "@storybook/react";
import styledTheme from "./styledTheme";
import { ThemeProvider } from "styled-components";

addDecorator(withA11y);
addDecorator(story => (
  <ThemeProvider theme={styledTheme}>{story()}</ThemeProvider>
));
addDecorator(story => <div style={{ background: "white" }}>{story()}</div>);

// automatically import all files ending in *.stories.js inside src/components
const req = require.context("../stories", true, /\.stories\.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
