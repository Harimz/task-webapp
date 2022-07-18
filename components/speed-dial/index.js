import React, { useState } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { MdAddBox, MdFolderShared } from "react-icons/md";
import { FaTasks, FaInbox, FaPlus } from "react-icons/fa";
import { CgFolderAdd } from "react-icons/cg";
import { motion } from "framer-motion";

const SpeedDial = () => {
  const [dialOpen, setDialOpen] = useState(false);

  return (
    <Box
      display={{ base: "flex", md: "none" }}
      position="fixed"
      bottom="1rem"
      right="1rem"
    >
      <IconButton
        onClick={() => setDialOpen((state) => !state)}
        size="lg"
        variant="primary"
        borderRadius="50%"
        icon={<FaPlus />}
        boxShadow="1px 1px 5px rgba(0,0,0,0.5)"
      />

      <Flex
        position="absolute"
        w="100%"
        flexDir="column"
        alignItems="center"
        gap="1rem"
        bottom={dialOpen ? "4rem" : "3rem"}
        opacity={dialOpen ? "100%" : "0"}
        transition="all 0.3s ease"
        pointerEvents={dialOpen ? "all" : "none"}
      >
        <IconButton variant="icon" icon={<FaInbox />} />
        <IconButton variant="icon" icon={<FaTasks />} />
        <IconButton variant="icon" icon={<MdFolderShared />} />
        <IconButton variant="icon" icon={<CgFolderAdd />} />
      </Flex>
    </Box>
  );
};

export default SpeedDial;
