import { Button } from "@chakra-ui/react";
import React from "react";

const NavItem = () => {
  return (
    <Button
      variant={active ? "navSelected" : "nav"}
      onClick={() => {
        router.replace("/list");
      }}
    >
      List
    </Button>
  );
};

export default NavItem;
