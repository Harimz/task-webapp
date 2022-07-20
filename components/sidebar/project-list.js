import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { getProjects } from "../../redux/api/projectCalls";
import { useSelector, useDispatch } from "react-redux";
import ProjectButton from "./project-button";

const ProjectList = ({ sidebarOpen }) => {
  const { projects, pending } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    getProjects(dispatch);
  }, [dispatch]);

  if (pending) {
    return "";
  }

  return (
    <Flex flexDir="column">
      {projects.map((project) => (
        <ProjectButton
          key={project._id}
          project={project}
          sidebarOpen={sidebarOpen}
        />
      ))}
    </Flex>
  );
};

export default ProjectList;
