import React, { useState } from "react";
import { Flex, GridItem, IconButton, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { addSectionTask } from "../../../redux/api/sectionCalls";
import { useDispatch } from "react-redux";
import BoardHeader from "./board-header";
import BoardTask from "./board-task";

const BoardItem = ({ section, projectColor }) => {
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
    <GridItem w="20rem">
      <BoardHeader section={section} projectColor={projectColor} />

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
        <BoardTask
          setTask={setTask}
          addTaskHandler={addTaskHandler}
          setAddTask={setAddTask}
        />
      )}
    </GridItem>
  );
};

export default BoardItem;
