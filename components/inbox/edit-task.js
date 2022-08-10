import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Label from "../label";
import DatePicker from "react-datepicker";
import LabelPopover from "../label/label-popover";
import { updateSectionTask } from "../../redux/api/taskSectionCalls";
import { useDispatch } from "react-redux";

const EditTaskModal = ({ isOpen, onClose, task, inbox, sectionId }) => {
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.description
  );
  const [updatedLabels, setUpdatedLabels] = useState(task.labels || []);
  const [updatedDate, setUpdatedDate] = useState(new Date(task.taskDate));
  const [label, setLabel] = useState("");
  const dispatch = useDispatch();

  const addLabelHandler = () => {
    setUpdatedLabels((state) => [...state, { title: label }]);

    setLabel("");
  };

  const editTaskHandler = () => {
    if (!inbox) {
      updateSectionTask(dispatch, sectionId, task._id, {
        title: updatedTitle,
        description: updatedDescription,
        taskDate: updatedDate.toString(),
        labels: updatedLabels,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={updatedTitle || ""}
            onChange={({ target }) => setUpdatedTitle(target.value)}
            size="sm"
            variant="flushed"
            placeholder="Title"
          />
          <Input
            value={updatedDescription || ""}
            onChange={({ target }) => setUpdatedDescription(target.value)}
            size="sm"
            variant="flushed"
            placeholder="description"
          />

          <Flex mt="1rem" gap="0.5rem" flexWrap="wrap">
            {updatedLabels.map((label, i) => (
              <Label
                key={i}
                title={label.title}
                labels={updatedLabels}
                edit
                setLabels={setUpdatedLabels}
                projectColor="#808080"
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

          <Flex mt="2rem" justifyContent="flex-end">
            <Button size="sm" variant="primary" onClick={editTaskHandler}>
              Save
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditTaskModal;
