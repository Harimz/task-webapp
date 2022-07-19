import { Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const NavItem = ({ icon, text, path }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const list = router.query.list;
  const projectId = router.query.projectId;

  return (
    <Button
      variant={pathname === path || `/${list}` === path ? "navActive" : "nav"}
      onClick={() => {
        if (projectId) {
          router.replace(`/projects${path}/${projectId}`);
        } else {
          router.replace(path);
        }
      }}
    >
      {icon}
      <Text>{text}</Text>
    </Button>
  );
};

export default NavItem;
