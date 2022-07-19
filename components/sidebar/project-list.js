import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Grid, IconButton, Text } from "@chakra-ui/react";
import { getProjects } from "../../redux/api/projectCalls";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import ProjectButton from "./project-button";

const ProjectList = ({ sidebarOpen }) => {
  const [mouseOver, setMouseOver] = useState({
    mouseIsOver: false,
    id: "",
  });
  const { projects, pending, error } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    getProjects(dispatch);
  }, [dispatch]);

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
