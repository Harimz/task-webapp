import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Label = ({ title, setLabels, labels, projectColor }) => {
  const labelsHandler = () => {
    const updatedLabels = labels.filter((label) => label.title !== title);

    setLabels(updatedLabels);
  };

  return (
    <Box
      bgColor={`#${projectColor.substring(1)}20`}
      borderRadius="15px"
      cursor="pointer"
      onClick={labelsHandler}
    >
      <Text
        color={`#${projectColor.substring(1)}`}
        fontWeight="bold"
        p="4px 10px"
        fontSize=".75rem"
      >
        {title}
      </Text>
    </Box>
  );
};

export default Label;
