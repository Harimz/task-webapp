import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { format } from "date-fns";
import { AiOutlineTag } from "react-icons/ai";
import { deleteTask } from "../../redux/api/taskSectionCalls";
import { deleteInboxTask } from "../../redux/api/inboxCalls";
import { DeleteButton, EditButton } from "../shared";
import EditTaskModal from "./edit-task";

const TaskListItem = ({ task, sectionId, inbox }) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);
  const [mouseHover, setMouseHover] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { taskSections } = useSelector((state) => state.taskSections);
  const date = format(new Date(task.taskDate), "yyyy-MM-dd");
  const dispatch = useDispatch();

  const deleteTaskHandler = () => {
    const taskId = task._id;

    if (inbox) {
      const inboxTaskId = task._id;
      deleteInboxTask(dispatch, inboxTaskId);
    } else {
      deleteTask(dispatch, sectionId, taskId);
    }
  };

  return (
    <>
      <EditTaskModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        task={task}
        inbox={inbox}
        sectionId={sectionId}
      />

      <Flex
        p="0.5rem 0"
        borderBottom="1px solid rgba(236, 236, 236, 0.75)"
        onMouseOver={() => setMouseHover(true)}
        onMouseOut={() => setMouseHover(false)}
        justifyContent="space-between"
        cursor="pointer"
        minH="3.25rem"
      >
        <Flex gap="1rem">
          <Box
            h="1.25rem"
            w="1.25rem"
            border="1px solid gray"
            borderRadius="50%"
            cursor="pointer"
            transition="all 0.3s ease"
            bgColor={isCompleted && "primary.200"}
            _hover={{ bgColor: "primary.100" }}
            onClick={deleteTaskHandler}
          />

          <Box>
            <Text color="gray.500" fontWeight="semibold">
              {task.title}
            </Text>

            <Text textStyle="text" fontSize=".75rem">
              {task.description}
            </Text>

            <Flex gap="1rem" color="gray.400">
              <Text fontSize=".75rem">{date}</Text>

              {task.labels.map((label) => (
                <Flex key={label._id} alignItems="center" gap=".25rem">
                  <AiOutlineTag />

                  <Text fontSize=".75rem">{label.title}</Text>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Flex>

        {mouseHover && (
          <Popover placement="top">
            <PopoverTrigger>
              <IconButton
                variant="ghost"
                size="sm"
                icon={<BiDotsHorizontalRounded />}
              />
            </PopoverTrigger>
            <PopoverContent w="6rem">
              <PopoverArrow />
              <EditButton onEdit={() => setEditModalOpen(true)} />
              <DeleteButton onDelete={deleteTaskHandler} />
            </PopoverContent>
          </Popover>
        )}
      </Flex>
    </>
  );
};

export default TaskListItem;
