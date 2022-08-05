import { Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import InboxTaskLabels from "./inbox-task-labels";

const TaskForm = ({
  setTaskName,
  setTaskDesc,
  addTaskHandler,
  setAddTaskOpen,
  setMouseHover,
  children,
}) => {
  return (
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

      {children}

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
  );
};

export default TaskForm;
