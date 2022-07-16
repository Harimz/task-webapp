import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

const SidebarItem = ({ isOpen, icon, text, des, setIsOpen }) => {
  return (
    <Button variant="sidebar">
      {isOpen ? (
        <Link passHref href={`/${des}`}>
          <Grid
            gap="0.5rem"
            alignItems="center"
            gridTemplateColumns="repeat(2, 25px)"
            w="10rem"
            onClick={() => setIsOpen(false)}
          >
            <Box>{icon}</Box>
            <Text>{text}</Text>
          </Grid>
        </Link>
      ) : (
        <Link passHref href={`/${des}`}>
          <Box>{icon}</Box>
        </Link>
      )}
    </Button>
  );
};

export default SidebarItem;
