import { Button } from "@chakra-ui/react";
import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteButton = ({ onDelete }) => {
  return (
    <Button
      justifyContent="flex-start"
      variant="ghost"
      leftIcon={<FaTrash />}
      onClick={onDelete}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
