import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { getProjects } from "../../redux/api/projectCalls";
import { useSelector, useDispatch } from "react-redux";
import ProjectButton from "./project-button";
import Link from "next/link";

const ProjectList = ({ sidebarOpen }) => {
  const { projects, pending } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    getProjects(dispatch);
  }, [dispatch]);

  if (pending) {
    return (
      <Flex mt="2rem" w="100%" justifyContent="center">
        <Spinner color="black" />;
      </Flex>
    );
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
