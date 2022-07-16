import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Flex
      as={motion.div}
      w={sidebarOpen ? "25rem" : "5rem"}
      maxH="100%"
      h="100vh"
      borderRight="1px solid rgba(236, 236, 236, 0.75)"
      flexDir="column"
      animate={{ width: sidebarOpen ? "25rem" : "5rem" }}
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
    </Flex>
  );
};

export default Sidebar;
