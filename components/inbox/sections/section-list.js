import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
} from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import AddSectionTask from "../add-section-task";
import TaskForm from "../task-form";
import InboxTaskLabels from "../inbox-task-labels";
import { addTask, deleteSection } from "../../../redux/api/taskSectionCalls";
import { useDispatch } from "react-redux";
import TaskListItem from "../task-list-item";
import { DeleteButton, EditButton } from "../../shared";

const SectionList = ({ section }) => {
  const [mouseHover, setMouseHover] = useState(false);
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [label, setLabel] = useState("");
  const [labels, setLabels] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [showTasks, setShowTasks] = useState(true);
  const dispatch = useDispatch();
  const sectionId = section._id;

  const addTaskHandler = () => {
    addTask(
      dispatch,
      {
        title: taskName,
        description: taskDesc,
        taskDate: startDate.toString(),
        labels: labels,
      },
      sectionId
    );
  };

  const addLabelHandler = () => {
    setLabels((state) => [...state, { title: label }]);

    setLabel("");
  };

  const deleteSectionHandler = () => {
    deleteSection(dispatch, sectionId);
  };

  return (
    <Box w="100%">
      <Flex w="100%" alignItems="center">
        {showTasks ? (
          <MdKeyboardArrowDown
            cursor="pointer"
            onClick={() => setShowTasks((state) => !state)}
          />
        ) : (
          <MdKeyboardArrowRight
            cursor="pointer"
            onClick={() => setShowTasks((state) => !state)}
          />
        )}
        <Heading ml="0.5rem" size="sm">
          {section.name}
        </Heading>

        <Spacer />

        <Popover placement="top">
          <PopoverTrigger>
            <IconButton
              variant="ghost"
              icon={<BiDotsHorizontalRounded />}
              size="sm"
            />
          </PopoverTrigger>
          <PopoverContent w="6.5rem">
            <EditButton />
            <DeleteButton onDelete={deleteSectionHandler} />
          </PopoverContent>
        </Popover>
      </Flex>

      {showTasks && (
        <>
          <Flex flexDir="column" gap="1rem" mt="1rem">
            {section.tasks.map((task) => (
              <TaskListItem sectionId={sectionId} key={task._id} task={task} />
            ))}
          </Flex>

          {!addTaskOpen ? (
            <AddSectionTask
              setMouseHover={setMouseHover}
              mouseHover={mouseHover}
              setAddTaskOpen={setAddTaskOpen}
            />
          ) : (
            <TaskForm
              setTaskName={setTaskName}
              setTaskDesc={setTaskDesc}
              addTaskHandler={addTaskHandler}
              setAddTaskOpen={setAddTaskOpen}
              setMouseHover={setMouseHover}
            >
              <InboxTaskLabels
                labels={labels}
                startDate={startDate}
                setStartDate={setStartDate}
                label={label}
                setLabel={setLabel}
                addLabelHandler={addLabelHandler}
                setLabels={setLabels}
              />
            </TaskForm>
          )}
        </>
      )}
    </Box>
  );
};

export default SectionList;
