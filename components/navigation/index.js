import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { IoIosListBox, IoIosCalendar } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState(0);
  const { data: session, status } = useSession();
  const router = useRouter();

  const navItems = ["list", "dashboard", "calander"];

  const pathname = router.pathname;

  return (
    <Flex
      p="1rem"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid rgba(236, 236, 236, 0.75)"
    >
      <Flex
        gap="1rem"
        width="25rem"
        justifyContent="space-evenly"
        display={{ base: "none", md: "flex" }}
      >
        <Button
          variant={pathname === "/list" ? "navActive" : "nav"}
          onClick={() => router.replace("/list")}
        >
          <IoIosListBox />
          <Text>List</Text>
        </Button>
        <Button
          variant={pathname === "/dashboard" ? "navActive" : "nav"}
          onClick={() => router.replace("/dashboard")}
        >
          <MdSpaceDashboard />
          <Text>Dashboard</Text>
        </Button>
        <Button
          variant={pathname === "/calendar" ? "navActive" : "nav"}
          onClick={() => router.replace("/calendar")}
        >
          <IoIosCalendar />
          <Text>Calendar</Text>
        </Button>
      </Flex>

      {!session ? (
        <Flex gap="1rem">
          <Button variant="ghost" onClick={() => router.replace("/login")}>
            Login
          </Button>
          <Button variant="primary" onClick={() => router.replace("/register")}>
            Register
          </Button>
        </Flex>
      ) : (
        <Button variant="primary" onClick={() => signOut()}>
          Logout
        </Button>
      )}
    </Flex>
  );
};

export default Navigation;
