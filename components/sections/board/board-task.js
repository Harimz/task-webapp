import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

const BoardTask = ({ setTask, addTaskHandler, setAddTask }) => {
  return (
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
  );
};

export default BoardTask;
