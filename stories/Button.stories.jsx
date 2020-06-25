import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../src/Button";

storiesOf("Atoms | Button", module)
  .add("Primary", () => (
    <>
      <div>
        <Button
          onClick={action("Primary Small Button Clicked")}
          variant="primary"
          size="small"
        >
          Small
        </Button>
      </div>
      <div>
        <Button
          onClick={action("Primary Big Button Clicked")}
          variant="primary"
          size="big"
        >
          Big
        </Button>
      </div>
    </>
  ))
  .add("Secondary", () => (
    <>
      <div>
        <Button
          onClick={action("Secondary Small Button Clicked")}
          variant="secondary"
          size="small"
        >
          Small
        </Button>
      </div>
      <div>
        <Button
          onClick={action("Secondary Big Button Clicked")}
          variant="secondary"
          size="big"
        >
          Big
        </Button>
      </div>
    </>
  ))
  .add("Plain", () => (
    <>
      <div>
        <Button
          onClick={action("Plain Small Button Clicked")}
          variant="plain"
          size="small"
        >
          Small
        </Button>
      </div>
      <div>
        <Button
          onClick={action("Plain Big Button Clicked")}
          variant="plain"
          size="big"
        >
          Big
        </Button>
      </div>
    </>
  ));
