import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navigation from "../navigation";
import Sidebar from "../sidebar";
import SpeedDial from "../speed-dial";

const Layout = ({ children }) => {
  return (
    <Flex minH="100%" h="100vh">
      <Sidebar />

      <Box w="100%">
        <Navigation />

        {children}
      </Box>

      <SpeedDial />
    </Flex>
  );
};

export default Layout;
