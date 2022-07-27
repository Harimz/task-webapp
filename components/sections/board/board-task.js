import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { AiFillTags } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import Label from "./label";

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

          <Popover>
            <PopoverTrigger>
              <IconButton
                mt="0.5rem"
                variant="ghost"
                size="sm"
                color="gray.400"
                icon={<AiFillTags />}
              />
            </PopoverTrigger>

            <PopoverContent w="10rem">
              <PopoverArrow />
              <Input
                onChange={({ target }) => setLabel(target.value)}
                size="sm"
                mb="1rem"
                value={label || ""}
                placeholder="Set label"
              />

              {label && (
                <Flex
                  transition="all 0.3s ease"
                  _hover={{ bgColor: "gray.200" }}
                  p="0.5rem"
                  alignItems="center"
                  gap="1rem"
                  cursor="pointer"
                  onClick={addLabelHandler}
                >
                  <FaPlus />

                  <Text>{label}</Text>
                </Flex>
              )}
            </PopoverContent>
          </Popover>
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
