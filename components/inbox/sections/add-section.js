import React, { useState } from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addSection } from "../../../redux/api/taskSectionCalls";

const AddSection = ({ addSectionOpen, setAddSectionOpen }) => {
  const [sectionName, setSectionName] = useState("");
  const dispatch = useDispatch();

  const addSectionHandler = () => {
    addSection(dispatch, { name: sectionName });
  };

  return (
    <>
      {addSectionOpen && (
        <Box mt="3rem">
          <Input
            placeholder="Section Name"
            mb="1rem"
            onChange={({ target }) => setSectionName(target.value)}
          />

          <Flex gap="1rem">
            <Button
              size="sm"
              variant="primary"
              disabled={sectionName.length === 0}
              onClick={addSectionHandler}
            >
              Add Section
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setAddSectionOpen(false)}
            >
              Cancel
            </Button>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default AddSection;
