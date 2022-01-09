import { Flex, VStack, Text, Icon, Spacer, Button } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { ReactNode, useContext } from "react";
import {
  HiUserGroup,
  HiUserCircle,
  HiUserAdd,
  HiViewGridAdd,
} from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "..";

type SidebarItemProps = {
  title: string;
  path: string;
  icon?: ReactNode;
};

const navItems = [
  {
    title: "Список групп",
    path: "groupslist",
    icon: <Icon as={HiUserGroup} w="6" h="6" color="white" />,
  },
  {
    title: "Список РОП",
    path: "masterslist",
    icon: <Icon as={HiUserCircle} w="6" h="6" color="white" />,
  },
  {
    title: "Добавить группу",
    path: "addgroup",
    icon: <Icon as={HiViewGridAdd} w="6" h="6" color="white" />,
  },
  {
    title: "Добавить РОП",
    path: "addmaster",
    icon: <Icon as={HiUserAdd} w="6" h="6" color="white" />,
  },
];

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <Link to={props.path}>
      <Flex alignItems="center" padding="0.75rem">
        {props.icon}
        <Text color="white" fontSize="1.3rem" ml="0.5rem">
          {props.title}
        </Text>
      </Flex>
    </Link>
  );
};

const Sidebar = observer(() => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const items = navItems.map((v, i) => {
    return <SidebarItem path={v.path} title={v.title} icon={v.icon} key={i} />;
  });

  return (
    <Flex
      h="100vh"
      direction="column"
      bgColor="gray.900"
      padding="0.25rem"
      position="sticky"
      top="0"
      bottom="auto"
    >
      <VStack alignItems="flex-start">{items}</VStack>
      <Spacer />
      <Text
        color="white"
        fontSize="1.3rem"
        ml="0.5rem"
        textAlign="center"
        mb="0.5rem"
      >
        {store.user.username}
      </Text>
      <Button
        bgColor="red.500"
        color="white"
        fontWeight="bold"
        onClick={() => {
          store.logout();
          navigate("/login");
        }}
      >
        Выйти
      </Button>
    </Flex>
  );
});

export default Sidebar;
