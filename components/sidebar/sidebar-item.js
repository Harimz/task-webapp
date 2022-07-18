import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/router";

const SidebarItem = ({ isOpen, icon, text, des, setIsOpen }) => {
  const router = useRouter();
  const pathname = router.pathname;

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
            color={pathname === `/${des}` ? "primary.200" : ""}
          >
            <Box>{icon}</Box>
            <Text>{text}</Text>
          </Grid>
        </Link>
      ) : (
        <Link passHref href={`/${des}`}>
          <Box color={pathname === `/${des}` ? "primary.200" : ""}>{icon}</Box>
        </Link>
      )}
    </Button>
  );
};

export default SidebarItem;
