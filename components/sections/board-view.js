import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { addSectionTask } from "../../redux/api/sectionCalls";
import { useDispatch } from "react-redux";

const BoardView = ({ section, projectColor }) => {
  const [addTask, setAddTask] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  const addTaskHandler = () => {
    console.log(section);
    addSectionTask(dispatch);
  };

  return (
    <GridItem border="2px solid red">
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

        <IconButton size="sm" variant="ghost" icon={<BsThreeDots />} />
      </Flex>

      {section?.tasks.map((task) => {})}

      {!addTask ? (
        <Flex
          alignItems="center"
          gap="1rem"
          cursor="pointer"
          _hover={{ color: "primary.200" }}
          fontWeight="semibold"
          mt="0.5rem"
          onClick={() => setAddTask(true)}
        >
          <IconButton size="sm" variant="ghost" icon={<FaPlus />} />
          <Text>Add Task</Text>
        </Flex>
      ) : (
        <>
          <Box
            p="0.5rem"
            borderRadius="10px"
            mt="1rem"
            h="10rem"
            border="1px solid gray"
            w="100%"
          >
            <Input
              onChange={({ target }) =>
                setTask((state) => ({ ...state, title: target.value }))
              }
              variant="ghost"
              placeholder="ex. Go to work."
              size="sm"
            />

            <Input />
          </Box>

          <Flex mt="1rem" gap="1rem" justifyContent="flex-end">
            <Button variant="ghost" size="sm" onClick={() => setAddTask(false)}>
              Cancel
            </Button>
            <Button onClick={addTaskHandler} variant="primary" size="sm">
              Add
            </Button>
          </Flex>
        </>
      )}
    </GridItem>
  );
};

export default BoardView;
