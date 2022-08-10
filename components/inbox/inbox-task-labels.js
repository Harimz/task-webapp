import React from "react";
import { Flex } from "@chakra-ui/react";
import LabelPopover from "../label/label-popover";
import Label from "../label";
import DatePicker from "react-datepicker";

const InboxTaskLabels = ({
  labels,
  startDate,
  setStartDate,
  label,
  setLabel,
  addLabelHandler,
  setLabels,
}) => {
  return (
    <>
      <Flex mt="1rem" gap="0.5rem" flexWrap="wrap">
        {labels.map((label, i) => (
          <Label
            key={i}
            title={label.title}
            labels={labels}
            setLabels={setLabels}
            projectColor="#808080"
            edit
          />
        ))}
      </Flex>

      <Flex>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <LabelPopover
          label={label}
          setLabel={setLabel}
          addLabelHandler={addLabelHandler}
        />
      </Flex>
    </>
  );
};

export default InboxTaskLabels;
