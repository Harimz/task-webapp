import React, { useState } from "react";
import { Box, Flex, Input, Text, Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../redux/api/taskSectionCalls";
import InboxTaskLabels from "./inbox-task-labels";
import TaskListItem from "./task-list-item";
import AddSectionTask from "./add-section-task";
import TaskForm from "./task-form";
import { addInboxTask } from "../../redux/api/inboxCalls";

const Inbox = ({ inboxTasks }) => {
  const [mouseHover, setMouseHover] = useState(false);
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [label, setLabel] = useState("");
  const [labels, setLabels] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const { projects } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const addLabelHandler = () => {
    setLabels((state) => [...state, { title: label }]);

    setLabel("");
  };

  const addTaskHandler = () => {
    addInboxTask(dispatch, {
      title: taskName,
      description: taskDesc,
      taskDate: startDate.toString(),
      labels: labels,
    });
  };

  return (
    <Box>
      <Flex flexDir="column" gap="1rem" mt="1.5rem">
        {inboxTasks.map((task) => (
          <TaskListItem inbox key={task._id} task={task} />
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
    </Box>
  );
};

export default Inbox;
