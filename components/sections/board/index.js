import React, { useState } from "react";
import { Flex, GridItem, IconButton, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { addSectionTask } from "../../../redux/api/sectionCalls";
import { useDispatch } from "react-redux";
import BoardHeader from "./board-header";
import BoardTask from "./board-task";
import Task from "./task";

const BoardItem = ({ section, projectColor, project }) => {
  const [addTask, setAddTask] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const [labels, setLabels] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const addTaskHandler = () => {
    addSectionTask(dispatch, project._id, {
      task: {
        ...task,
        labels,
        taskDate: startDate.toString(),
        sectionId: section._id,
        section: section._id,
      },
    });

    setAddTask(false);
  };

  return (
    <GridItem w="20rem">
      <BoardHeader section={section} projectColor={projectColor} />

      {section?.tasks.map((task) => (
        <Task key={task._id} task={task} projectColor={projectColor} />
      ))}

      {!addTask ? (
        <Flex
          alignItems="center"
          gap="1rem"
          cursor="pointer"
          transition="all 0.3s ease"
          borderRadius="10px"
          _hover={{ color: "gray.500", bgColor: "gray.100" }}
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
          setLabels={setLabels}
          labels={labels}
          projectColor={projectColor}
          startDate={startDate}
          setStartDate={setStartDate}
        />
      )}
    </GridItem>
  );
};

export default BoardItem;
