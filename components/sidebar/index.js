import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { motion } from "framer-motion";
import { MdAddBox, MdFolderShared } from "react-icons/md";
import { FaHome, FaTasks } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { CgFolderAdd } from "react-icons/cg";
import SidebarItem from "./sidebar-item";
import Link from "next/link";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  console.log(sidebarOpen);

  return (
    <Flex
      as={motion.div}
      w={sidebarOpen ? "10rem" : "5rem"}
      maxH="100%"
      h="100vh"
      borderRight="1px solid rgba(236, 236, 236, 0.75)"
      flexDir="column"
      animate={{ width: sidebarOpen ? "20rem" : "5rem" }}
      transition={{
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 50,
      }}
    >
      <Flex
        p="1.48rem"
        borderBottom="1px solid rgba(236, 236, 236, 0.75)"
        justifyContent="flex-end"
        mb="2rem"
      >
        {sidebarOpen ? (
          <RiMenuFoldFill
            size={25}
            cursor="pointer"
            onClick={() => setSidebarOpen((state) => !state)}
          />
        ) : (
          <RiMenuUnfoldFill
            size={25}
            cursor="pointer"
            onClick={() => setSidebarOpen((state) => !state)}
          />
        )}
      </Flex>

      <Flex flexDir="column" gap="2rem">
        <SidebarItem
          isOpen={sidebarOpen}
          text="Dashboard"
          icon={<FaHome />}
          des="dashboard"
          setIsOpen={setSidebarOpen}
        />
        <SidebarItem
          isOpen={sidebarOpen}
          text="My Tasks"
          icon={<FaTasks />}
          des="my-tasks"
          setIsOpen={setSidebarOpen}
        />
        <SidebarItem
          isOpen={sidebarOpen}
          text="Shared Projects"
          icon={<MdFolderShared />}
          des="shared-projects"
          setIsOpen={setSidebarOpen}
        />
      </Flex>

      <Flex
        mt="3rem"
        alignItems="center"
        justifyContent="space-between"
        p="2rem"
        color="gray.400"
        fontWeight="bold"
        borderBottom="1px solid rgba(236, 236, 236, 0.75)"
        borderTop="1px solid rgba(236, 236, 236, 0.75)"
      >
        {sidebarOpen ? (
          <>
            <Text>Projects</Text>
            <Link passHref href="/add-project">
              <Box>
                <MdAddBox cursor="pointer" size={20} />{" "}
              </Box>
            </Link>
          </>
        ) : (
          <CgFolderAdd />
        )}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
