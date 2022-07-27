import React, { useState } from "react";
import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { IoIosListBox, IoIosCalendar } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import NavItem from "./nav-item";
import User from "../user";

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState(0);
  const { data: session, status } = useSession();
  const router = useRouter();

  const navItems = ["list", "dashboard", "calander"];

  const pathname = router.pathname;

  return (
    <Flex
      p="1.25rem"
      justifyContent="flex-end"
      alignItems="center"
      borderBottom="1px solid rgba(236, 236, 236, 0.75)"
    >
      {!session ? (
        <Flex gap="1rem">
          <Button
            size={{ base: "sm", md: "md" }}
            variant="ghost"
            onClick={() => router.replace("/login")}
          >
            Login
          </Button>
          <Button
            size={{ base: "sm", md: "md" }}
            variant="primary"
            onClick={() => router.replace("/register")}
          >
            Register
          </Button>
        </Flex>
      ) : (
        <Flex>
          <User />
          {/* <Button size="sm">Logout</Button> */}
        </Flex>
      )}
    </Flex>
  );
};

export default Navigation;
