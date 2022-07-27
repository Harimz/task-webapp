import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AiOutlineUserAdd } from "react-icons/ai";
import Sections from "../../components/sections";
import { FaHeart } from "react-icons/fa";
import { updateProject } from "../../redux/api/projectCalls";
import { useDispatch } from "react-redux";

const ProjectPage = () => {
  const router = useRouter();
  const { projects, pending } = useSelector((state) => state.projects);
  const { projectId } = router.query;
  const project = projects.filter((project) => project._id === projectId).pop();
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavorite(project?.isFavorite);
  }, [project]);

  const favoriteHandler = () => {
    setIsFavorite((state) => !state);

    console.log(isFavorite);

    // updateProject(dispatch, project._id, { isFavorite: isFavorite });
  };

  if (pending) {
    return "";
  }

  return (
    <Box p="3rem" m="0 auto" w="100%" maxW="100rem">
      <Text mb="1rem" color="gray.400" fontWeight="bold">
        Projects / {project?.name}
      </Text>

      <Flex mb="2rem" justifyContent="space-between">
        <Heading>{project?.name}</Heading>

        <Flex gap="1rem">
          <IconButton
            onClick={favoriteHandler}
            variant="outline"
            icon={<FaHeart color={isFavorite ? "red" : "black"} />}
          />

          <Button variant="outline" fontWeight="bold">
            <Flex alignItems="center" gap="0.5rem">
              <AiOutlineUserAdd size={20} />
              <Text>Share</Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>

      <Sections project={project} pending={pending} />
    </Box>
  );
};

export default ProjectPage;
