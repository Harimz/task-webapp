import React from "react";
import { useRouter } from "next/router";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AiOutlineUserAdd } from "react-icons/ai";

const ProjectPage = () => {
  const router = useRouter();
  const { projects, pending } = useSelector((state) => state.projects);
  const { list, projectId } = router.query;

  const project = projects.filter((project) => project._id === projectId).pop();

  if (pending) {
    return "loading...";
  }

  return (
    <Stack p="3rem" m="0 auto" w="100%" maxW="100rem">
      <Text color="gray.400" fontWeight="bold">
        Projects / {project?.name} / {list}
      </Text>

      <Flex justifyContent="space-between">
        <Heading>{project?.name}</Heading>

        <Button variant="outline" fontWeight="bold">
          <Flex alignItems="center" gap="0.5rem">
            <AiOutlineUserAdd size={20} />
            <Text>Share</Text>
          </Flex>
        </Button>
      </Flex>
    </Stack>
  );
};

export default ProjectPage;
