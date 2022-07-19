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
import { projectColors } from "../../data";
import { wordToHex } from "../../helpers";
import { addProject } from "../../redux/api/projectCalls";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

const AddProject = ({ isOpen, onClose, setIsOpen }) => {
  const [projectName, setProjectName] = useState("");
  const [selectedColor, setSelectedColor] = useState("red");
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const { pending, error } = useSelector((state) => state.projects);
  const { data: session } = useSession();

  const testHandler = async () => {
    addProject(dispatch, {
      name: projectName,
      color: selectedColor,
      isFavorite,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
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

            <Flex alignItems="center" gap="0.5rem">
              <Select
                size="sm"
                onChange={({ target }) => setSelectedColor(target.value)}
              >
                {projectColors.map((value) => (
                  <option value={wordToHex(value)} key={wordToHex(value)}>
                    {value}
                  </option>
                ))}
              </Select>

              <Box
                h="1rem"
                w="1rem"
                borderRadius="50%"
                bgColor={selectedColor}
              />
            </Flex>
          </Box>
        </Flex>

        <FormControl
          display="flex"
          alignItems="center"
          mt="2rem"
          borderBottom="1px solid rgba(236, 236, 236, 0.75)"
          paddingBottom="3rem"
        >
          <Switch
            onChange={() => setIsFavorite((state) => !state)}
            colorScheme="purple"
            mr="1rem"
          />

          <FormLabel htmlFor="email-alerts" mb="0">
            Add to favorites?
          </FormLabel>
        </FormControl>

        <Flex gap="1rem" justifyContent="flex-end" mt="2rem">
          <Button size="sm" variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={testHandler}
            disabled={session ? false : true}
          >
            {pending ? <Spinner /> : "Add"}
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default AddProject;
