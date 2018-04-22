import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SpectrumBadge from "../src/components/badge";

storiesOf("Badge", module).add("default", () => (
  <SpectrumBadge
    repo="Spectrum"
    size="220px"
    borderColor="#c299ff"
    lighterShade="#c299ff"
    darkerShade="#6600ff"
  />
));
