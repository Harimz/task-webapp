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
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import Label from "./label";
import LabelPopover from "./label-popover";

const EditModal = ({ isOpen, onClose, projectColor, task }) => {
  const [updatedDate, setUpdatedDate] = useState(new Date());
  const [updatedLabels, setUpdatedLabels] = useState(task.labels || []);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.description
  );
  const [label, setLabel] = useState("");
  const taskDate = new Date(task.taskDate);

  const addLabelHandler = () => {
    setUpdatedLabels((state) => [...state, { title: label }]);

    setLabel("");
  };

  console.log(updatedLabels);

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
              selected={taskDate}
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
          <Button size="sm" variant="ghost" mr={3}>
            Delete
          </Button>

          <Button
            size="sm"
            bgColor={projectColor}
            color="white"
            _hover={{ bgColor: `#${projectColor.substring(1)}70` }}
          >
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
