import React, { useState } from "react";
import { Divider, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import Label from "./label";
import { format } from "date-fns";
import { BsThreeDots } from "react-icons/bs";
import EditModal from "./edit-modal";

const Task = ({ task, projectColor, sectionId }) => {
  const taskDate = new Date(task.taskDate);
  const date = format(taskDate, "yyyy-MM-dd");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <EditModal
        isOpen={modalOpen}
        onClose={setModalOpen}
        task={task}
        projectColor={projectColor}
        sectionId={sectionId}
      />

      <Flex
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        flexDir="column"
        borderRadius="8px"
        p="1rem"
        m="3px"
        mt="1rem"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Heading mb="0.5rem" size="sm">
            {task.title}
          </Heading>

          <IconButton
            onClick={() => setModalOpen(true)}
            variant="ghost"
            icon={<BsThreeDots />}
          />
        </Flex>

        <Text mb="1rem" color="gray.400">
          {task.description}
        </Text>

        <Flex mb="1rem" gap="0.5rem" flexWrap="wrap">
          {task.labels.map((label, i) => (
            <Label key={i} title={label.title} projectColor={projectColor} />
          ))}
        </Flex>

        <Divider />

        <Text mt="1rem" color="gray.500" fontWeight="semibold">
          {date}
        </Text>
      </Flex>
    </>
  );
};

export default Task;
