import React from "react";
import {
  Avatar,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";

const User = () => {
  return (
    <Flex>
      <Popover>
        <PopoverTrigger>
          <Avatar size="sm" cursor="pointer" />
        </PopoverTrigger>

        <PopoverContent w="15rem">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>User</PopoverHeader>
          <PopoverBody>
            <Button w="100%" variant="ghost" onClick={() => signOut()}>
              Logout
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default User;
