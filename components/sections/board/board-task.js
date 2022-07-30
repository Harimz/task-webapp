import React, { useState } from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import Label from "./label";
import LabelPopover from "./label-popover";

const BoardTask = ({
  setTask,
  addTaskHandler,
  setAddTask,
  setLabels,
  labels,
  projectColor,
  startDate,
  setStartDate,
}) => {
  const [label, setLabel] = useState("");

  const addLabelHandler = () => {
    setLabels((state) => [...state, { title: label }]);

    setLabel("");
  };

  return (
    <>
      <Box
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        p="1rem"
        borderRadius="10px"
        m="3px"
        mt="1rem"
      >
        <Input
          onChange={({ target }) =>
            setTask((state) => ({ ...state, title: target.value }))
          }
          variant="flushed"
          placeholder="ex. Go to work."
          size="sm"
        />

        <Input
          onChange={({ target }) =>
            setTask((state) => ({ ...state, description: target.value }))
          }
          h="3rem"
          placeholder="description"
          variant="flushed"
        />

        <Flex mt="1rem" gap="0.5rem" flexWrap="wrap">
          {labels.map((label, i) => (
            <Label
              key={i}
              title={label.title}
              labels={labels}
              setLabels={setLabels}
              projectColor={projectColor}
              edit
            />
          ))}
        </Flex>

        <Flex mt=".5rem" alignItems="center" justifyContent="space-between">
          <Box>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Box>

          <LabelPopover
            label={label}
            addLabelHandler={addLabelHandler}
            setLabel={setLabel}
            edit
          />
        </Flex>
      </Box>

      <Flex mt="1rem" gap="1rem" justifyContent="flex-end">
        <Button variant="ghost" size="sm" onClick={() => setAddTask(false)}>
          Cancel
        </Button>
        <Button
          onClick={addTaskHandler}
          bgColor={projectColor}
          color="white"
          size="sm"
          _hover={{ bgColor: `#${projectColor.substring(1)}70` }}
        >
          Add
        </Button>
      </Flex>
    </>
  );
};

export default BoardTask;
