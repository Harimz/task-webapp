import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../footer";
import Navigation from "../navigation";
import Sidebar from "../sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Flex>
        <Sidebar />

        <Box w="100%">
          <Navigation />

          {children}
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
