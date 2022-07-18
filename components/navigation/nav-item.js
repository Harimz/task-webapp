import { Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const NavItem = ({ icon, text, path }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Button
      variant={pathname === path ? "navActive" : "nav"}
      onClick={() => router.replace(path)}
    >
      {icon}
      <Text>{text}</Text>
    </Button>
  );
};

export default NavItem;
