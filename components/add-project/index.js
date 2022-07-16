import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Switch,
  Text,
} from "@chakra-ui/react";

const AddProject = ({ isOpen, onClose, setIsOpen }) => {
  const [projectName, setProjectName] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent w={{ base: "90%", md: "25rem" }} p="1rem">
        <Text
          textStyle="subheading"
          borderBottom="1px solid rgba(236, 236, 236, 0.75)"
          paddingBottom="1rem"
        >
          Add Project
        </Text>

        <Flex flexDir="column" gap="1rem" mt="1rem">
          <Box>
            <Text>Name</Text>
            <Input
              size="sm"
              onChange={({ target }) => setProjectName(target.value)}
            />
          </Box>

          <Box>
            <Text>Color</Text>
            <Select size="sm">
              <option value="option1">Option 1</option>
            </Select>
          </Box>
        </Flex>

        <FormControl
          display="flex"
          alignItems="center"
          mt="2rem"
          borderBottom="1px solid rgba(236, 236, 236, 0.75)"
          paddingBottom="3rem"
        >
          <Switch colorScheme="purple" mr="1rem" />

          <FormLabel htmlFor="email-alerts" mb="0">
            Add to favorites?
          </FormLabel>
        </FormControl>

        <Flex gap="1rem" justifyContent="flex-end" mt="2rem">
          <Button size="sm" variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button size="sm" variant="primary">
            Add
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default AddProject;
