import { Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

type SidebarItemProps = {
  title: string;
  path: string;
  isActive?: boolean;
  setActive?: Function;
};

const navItems: SidebarItemProps[] = [
  {
    title: "Список групп",
    path: "/groups",
  },
  {
    title: "Список РОП",
    path: "/masters",
  },
  {
    title: "Добавить группу",
    path: "/home",
  },
  {
    title: "Добавить РОП",
    path: "/home",
  },
];

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <>
      <Link to={props.path}>{props.title}</Link>
    </>
  );
};

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<number>();

  const items = navItems.map((v, i) => {
    return (
      <SidebarItem
        path={v.path}
        title={v.title}
        isActive={activeItem === i}
        setActive={() => setActiveItem(i)}
        key={i}
      />
    );
  });
  return (
    <Flex direction="column" bgColor="teal">
      <VStack alignItems="flex-start">{items}</VStack>
    </Flex>
  );
};

export default Sidebar;
