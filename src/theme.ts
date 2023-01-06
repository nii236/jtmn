import type { Theme } from "theme-ui"

import "@fontsource/ubuntu"
import "@fontsource/ubuntu-mono"
import "@fontsource/ubuntu-condensed"
import { system } from "@theme-ui/presets"

export const theme: Theme = {
  ...system,
  sizes: {
    container: {
      maxWidth: "5rem",
    },
  },
  fonts: {
    ...system.fonts,
    body: "Ubuntu Mono",
    heading: "Ubuntu Mono",
    monospace: "Ubuntu Mono, monospace",
  },
  buttons: {
    secondary: {
      color: "primary",
      bg: "transparent",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "primary",
    },
  },
  colors: {
    ...system.colors,
  },
  styles: {
    ...system.styles,
    root: {
      fontFamily: "body",
    },
    li: {
      listStyleType: "none",
    },
  },

  config: {
    initialColorModeName: "light",
  },
  links: {
    term: {
      ":link": { color: "primary" },
      ":hover": { color: "primary" },
      ":visited": { color: "primary" },
    },
  },
}
