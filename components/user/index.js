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
import { useDispatch } from "react-redux";
import { clearProjects } from "../../redux/projectSlice";

const User = () => {
  const dispatch = useDispatch();

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
            <Button
              w="100%"
              variant="ghost"
              onClick={() => {
                signOut();

                dispatch(clearProjects());
              }}
            >
              Logout
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default User;
