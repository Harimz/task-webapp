import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import breakpoints from "./breakpoints";
import * as foundations from "./foundations";
import { Button, Input } from "./components";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  ...foundations,
  components: {
    Button,
    Input,
  },
});

export default theme;
