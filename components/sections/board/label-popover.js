import {
  Flex,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillTags } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const LabelPopover = ({ label, setLabel, addLabelHandler }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          mt="0.5rem"
          variant="ghost"
          size="sm"
          color="gray.400"
          icon={<AiFillTags />}
        />
      </PopoverTrigger>

      <PopoverContent w="10rem">
        <PopoverArrow />
        <Input
          onChange={({ target }) => setLabel(target.value)}
          size="sm"
          mb="1rem"
          value={label || ""}
          placeholder="Set label"
        />

        {label && (
          <Flex
            transition="all 0.3s ease"
            _hover={{ bgColor: "gray.200" }}
            p="0.5rem"
            alignItems="center"
            gap="1rem"
            cursor="pointer"
            onClick={addLabelHandler}
          >
            <FaPlus />

            <Text>{label}</Text>
          </Flex>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default LabelPopover;
