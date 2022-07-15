import React, { useState } from "react";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <Flex maxW="100rem" m="0 auto" p="1rem" justifyContent="space-between">
      <Flex gap="1rem">
        <IconButton
          variant="ghost"
          aria-label="menu"
          icon={<GiHamburgerMenu size={20} />}
          color="black"
          onClick={() => setDrawerOpen(!drawerOpen)}
        />

        <IconButton
          aria-label="home"
          variant="ghost"
          icon={<FaHome size={20} />}
          color="black"
          onClick={() => router.replace("/")}
        />
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
