import React, { useState } from "react";
import { Box, Flex, Input, Text, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import LabelPopover from "../label/label-popover";
import Label from "../label";
import { addTask } from "../../redux/api/taskSectionCalls";
import InboxTaskLabels from "./inbox-task-labels";
import TaskListItem from "./task-list-item";

const Inbox = ({ taskSections }) => {
  const [mouseHover, setMouseHover] = useState(false);
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [label, setLabel] = useState("");
  const [labels, setLabels] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const { projects } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const addLabelHandler = () => {
    setLabels((state) => [...state, { title: label }]);

    setLabel("");
  };

  const addTaskHandler = () => {
    addTask(dispatch, {
      title: taskName,
      description: taskDesc,
      taskDate: startDate.toString(),
      labels: labels,
      belongsTo: "inbox",
    });
  };

  const inboxSection = taskSections.filter(
    (taskSection) => taskSection.belongTo === "inbox"
  )[0];

  return (
    <Box>
      <Flex flexDir="column" gap="1rem" mt="1.5rem">
        {inboxSection?.tasks.map((task) => (
          <TaskListItem key={task._id} task={task} />
        ))}
      </Flex>

      {!addTaskOpen ? (
        <Flex
          mt="1rem"
          gap="1rem"
          alignItems="center"
          cursor="pointer"
          onMouseOver={() => setMouseHover(true)}
          onMouseOut={() => setMouseHover(false)}
          transition="background 0.3s ease"
          bgColor={mouseHover && "gray.100"}
          borderRadius="10px"
          p=".25rem"
          onClick={() => setAddTaskOpen(true)}
        >
          <AiOutlinePlus />
          <Text textStyle="text">Add Task</Text>
        </Flex>
      ) : (
        <Flex
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          p="1rem"
          borderRadius="10px"
          mt="1rem"
          flexDir="column"
          gap="1rem"
        >
          <Input
            variant="flushed"
            placeholder="Task Name"
            onChange={({ target }) => setTaskName(target.value)}
          />
          <Input
            variant="unstyled"
            placeholder="Task Description"
            onChange={({ target }) => setTaskDesc(target.value)}
          />

          <InboxTaskLabels
            labels={labels}
            startDate={startDate}
            setStartDate={setStartDate}
            label={label}
            setLabel={setLabel}
            addLabelHandler={addLabelHandler}
            setLabels={setLabels}
          />

          <Flex justifyContent="flex-end" gap="1rem" mt="1rem">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setAddTaskOpen(false);
                setMouseHover(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={addTaskHandler}>
              Save
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Inbox;
