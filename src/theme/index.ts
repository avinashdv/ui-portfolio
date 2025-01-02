import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
    robotoMono: "Roboto Mono",
  },
  colors: {
    brand: "#ff5200",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: "",
      },
    }),
  },
});

export default theme;
