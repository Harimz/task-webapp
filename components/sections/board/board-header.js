import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
import { deleteSection } from "../../../redux/api/sectionCalls";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const BoardHeader = ({ section, projectColor }) => {
  const dispatch = useDispatch();
  const {
    query: { projectId },
  } = useRouter();

  const deleteSectionHandler = () => {
    const sectionId = section._id;

    deleteSection(dispatch, projectId, sectionId);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      borderBottom="3px solid red"
      borderColor={projectColor}
      pb="1rem"
    >
      <Flex gap="0.5rem" alignItems="center">
        <Heading size="md">{section?.name}</Heading>
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
            {section?.tasks.length.toString()}
          </Text>
        </Flex>
      </Flex>

      <Popover>
        <PopoverTrigger>
          <IconButton size="sm" variant="ghost" icon={<BsThreeDots />} />
        </PopoverTrigger>
        <PopoverContent w="10rem">
          <PopoverArrow />

          <Flex flexDir="column" gap="0.5rem">
            <Button
              justifyContent="flex-start"
              variant="ghost"
              size="sm"
              leftIcon={<BiEditAlt />}
            >
              Edit
            </Button>

            <Button
              justifyContent="flex-start"
              variant="ghost"
              size="sm"
              leftIcon={<AiTwotoneDelete />}
              onClick={deleteSectionHandler}
            >
              Delete
            </Button>
          </Flex>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default BoardHeader;
