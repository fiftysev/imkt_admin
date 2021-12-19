import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

const SidebarLayout = (props: { children: ReactNode }) => {
  return (
    <>
      <Flex w="100" h="100vh">
        <Sidebar></Sidebar>
        {props.children}
      </Flex>
    </>
  );
};

export default SidebarLayout;
