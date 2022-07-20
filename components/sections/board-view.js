import React from "react";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const BoardView = ({ section, projectColor }) => {
  console.log(section);

  return (
    <GridItem>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        borderBottom="3px solid red"
        borderColor={projectColor}
        pb="1rem"
      >
        <Flex gap="0.5rem" alignItems="center">
          <Heading size="md">{section.name}</Heading>
          <Flex
            border="1px solid gray"
            borderColor="gray.200"
            justifyContent="center"
            alignItems="center"
            borderRadius="50%"
            padding="10px"
            h="1rem"
            w="1rem"
          >
            <Text fontWeight="semibold" color="gray.400">
              {section.tasks.length.toString()}
            </Text>
          </Flex>
        </Flex>

        <IconButton size="sm" variant="ghost" icon={<BsThreeDots />} />
      </Flex>

      {section?.tasks.map((task) => {})}
    </GridItem>
  );
};

export default BoardView;
