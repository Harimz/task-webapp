import React, { useState } from "react";
import { Box, Flex, Input, Text, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import LabelPopover from "../label/label-popover";
import Label from "../label";

const Inbox = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [label, setLabel] = useState("");
  const [labels, setLabels] = useState([]);
  const { projects } = useSelector((state) => state.projects);

  const addLabelHandler = () => {
    setLabels((state) => [...state, { title: label }]);

    setLabel("");
  };

  return (
    <Box>
      {!addTask ? (
        <Flex
          mt="1rem"
          gap="1rem"
          alignItems="center"
          cursor="pointer"
          onMouseOver={() => setMouseHover(true)}
          onMouseOut={() => setMouseHover(false)}
          transition="all 0.3s ease"
          bgColor={mouseHover && "gray.100"}
          borderRadius="10px"
          p=".25rem"
          onClick={() => setAddTask(true)}
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
          <Input variant="flushed" placeholder="Task Name" />
          <Input variant="unstyled" placeholder="Task Description" />

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
        </Flex>
      )}
    </Box>
  );
};

export default Inbox;
