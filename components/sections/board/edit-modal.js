import React, { useState } from "react";
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import Label from "./label";
import LabelPopover from "./label-popover";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../../redux/api/taskCalls";
import { useRouter } from "next/router";

const EditModal = ({ isOpen, onClose, projectColor, task, sectionId }) => {
  const [updatedDate, setUpdatedDate] = useState(new Date(task.taskDate));
  const [updatedLabels, setUpdatedLabels] = useState(task.labels || []);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.description
  );
  const [label, setLabel] = useState("");
  const dispatch = useDispatch();
  const taskDate = new Date(task.taskDate);
  const {
    query: { projectId },
  } = useRouter();
  const taskId = task._id;

  const addLabelHandler = () => {
    setUpdatedLabels((state) => [...state, { title: label }]);

    setLabel("");
  };

  const deleteTaskHandler = () => {
    deleteTask(dispatch, projectId, sectionId, taskId);
  };

  const updateTaskHandler = () => {
    updateTask(dispatch, projectId, sectionId, taskId, {
      title: updatedTitle,
      description: updatedDescription,
      taskDate: updatedDate,
      labels: updatedLabels,
    });

    onClose(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="25rem" w="90%">
        <ModalCloseButton />
        <ModalBody mt="3rem">
          <Flex gap="1rem" flexDir="column">
            <Input
              placeholder="title"
              variant="flushed"
              size="sm"
              value={updatedTitle || ""}
              onChange={({ target }) => setUpdatedTitle(target.value)}
            />
            <Input
              placeholder="Description"
              variant="flushed"
              size="sm"
              value={updatedDescription || ""}
              onChange={({ target }) => setUpdatedDescription(target.value)}
            />
          </Flex>

          <Flex mt="1rem" gap="0.5rem" flexWrap="wrap">
            {updatedLabels.map((label, i) => (
              <Label
                key={i}
                title={label.title}
                labels={updatedLabels}
                edit
                setLabels={setUpdatedLabels}
                projectColor={projectColor}
              />
            ))}
          </Flex>

          <Flex mt="1rem" justifyContent="space-between" alignItems="center">
            <DatePicker
              selected={updatedDate}
              onChange={(date) => setUpdatedDate(date)}
            />

            <LabelPopover
              label={label}
              addLabelHandler={addLabelHandler}
              setLabel={setLabel}
            />
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button size="sm" variant="ghost" mr={3} onClick={deleteTaskHandler}>
            Delete
          </Button>

          <Button
            size="sm"
            bgColor={projectColor}
            color="white"
            _hover={{ bgColor: `#${projectColor.substring(1)}70` }}
            onClick={updateTaskHandler}
          >
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
