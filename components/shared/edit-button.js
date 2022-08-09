import { Button } from "@chakra-ui/react";
import React from "react";
import { FaEdit } from "react-icons/fa";

const EditButon = ({ onEdit }) => {
  return (
    <Button
      justifyContent="flex-start"
      variant="ghost"
      leftIcon={<FaEdit />}
      onClick={onEdit}
    >
      Edit
    </Button>
  );
};

export default EditButon;
