import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

const DefaultView = ({ sectionName, setSectionName, addSectionHandler }) => {
  return (
    <Box w="95%" maxW="15rem">
      <Input
        placeholder="Name this section"
        size="sm"
        onChange={({ target }) => setSectionName(target.value)}
      />
      <Flex justifyContent="flex-end" mt="1rem">
        <Button
          variant="primary"
          size="sm"
          onClick={addSectionHandler}
          disabled={sectionName.length === 0}
        >
          Add Section
        </Button>
      </Flex>
    </Box>
  );
};

export default DefaultView;
