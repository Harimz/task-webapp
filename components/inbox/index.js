import React, { useState } from "react";
import { Box, Flex, Input, Text, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import LabelPopover from "../label/label-popover";
import Label from "../label";
import { addTask } from "../../redux/api/taskSectionCalls";

const Inbox = () => {
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

  return (
    <Box>
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

          <Flex mt="1rem" gap="0.5rem" flexWrap="wrap">
            {labels.map((label, i) => (
              <Label
                key={i}
                title={label.title}
                labels={labels}
                setLabels={setLabels}
                projectColor="gray"
                edit
              />
            ))}
          </Flex>

          <Flex>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />

            <LabelPopover
              label={label}
              setLabel={setLabel}
              addLabelHandler={addLabelHandler}
            />
          </Flex>

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
