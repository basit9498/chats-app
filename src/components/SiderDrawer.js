import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatStore } from "../context/AppContext";
import Loading from "./Loading";
import Profile from "./Profile";
import UserListItem from "./UserListItem";

const SiderDrawer = ({ user }) => {
  const { setSelectedChat, setChat, chat } = ChatStore();
  const nagivation = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  console.log("user", user);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  useEffect(() => {
    setSelectedChat();
  }, []);
  const handlerSeacher = async () => {
    setSearchResult([]);
    if (!search) {
      toast({
        title: "Please Enter Something in Search Field",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top-left",
      });
    }
    try {
      setLoading(true);
      const token = localStorage.getItem("user_token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const data = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/user/list/?search=${search}`,
        config
      );
      if (data.status === 200) {
        setSearchResult(data?.data?.user_list);

        //Will be working on this
      }

      setLoading(false);
      console.log("data", data);
    } catch (error) {
      setLoading(false);
      toast({
        title: "Fail Loading",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  const accessChat = async (id) => {
    setLoadingChat(false);
    if (!id) {
      toast({
        title: "user Id not Provided",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-left",
      });
    } else {
      try {
        setLoadingChat(true);
        const token = localStorage.getItem("user_token");

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const data = await axios.post(
          `${process.env.REACT_APP_BASE_API_URL}/chat/access`,
          { user_id: id },
          config
        );
        if (data.status === 200) {
          console.log("data?.data?.user_list", data?.data?.new_chat);
          // setSearchResult(data?.data?.user_list);
          if (!chat.find((c) => c._id === data?.data?.new_chat._id)) {
            setChat([data?.data?.new_chat, ...chat]);
          }
          setSelectedChat(data?.data);
          setLoadingChat(false);
          onClose();
        }

        console.log("data", data);
      } catch (error) {
        setLoading(false);
        toast({
          title: "Fail Fetching",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top-left",
        });
      }
    }
  };
  return (
    <>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        bg="white"
        p={"5px 10px 5px 10px"}
        borderWidth="5px"
      >
        <Tooltip label="Search User " hasArrow placement="bottom-end">
          <Button
            onClick={() => {
              onOpen();
            }}
          >
            Search
            {/* <Text display={{ base: "none", md: "flex" }}>When Icon Then Use</Text> */}
          </Button>
        </Tooltip>

        <Text fontSize={"2xl"} fontFamily="Work sans">
          Chat App
        </Text>
        <Box>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize={"2xl"} m={1} color={"gray.600"} />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                size={"sm"}
                cursor="pointer"
                name={user?.name}
                //  src=""
              />
            </MenuButton>
            <MenuList>
              <Profile user={user}>
                <MenuItem>My Profile</MenuItem>
              </Profile>

              <MenuItem
                onClick={() => {
                  localStorage.removeItem("user_token");
                  localStorage.removeItem("user_data");
                  nagivation("/");
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>
            <Text>aasdasd</Text>
          </DrawerHeader>
          <DrawerBody>
            <Box display={"flex"} pb={2}>
              <Input
                placeholder="User Searching... "
                mr={2}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Button onClick={handlerSeacher}>GO</Button>
            </Box>
            {loading ? (
              <>
                <Loading />
              </>
            ) : (
              <>
                {searchResult?.map((_user) => {
                  return (
                    <UserListItem
                      key={_user._id}
                      users={_user}
                      handleFunction={() => {
                        accessChat(_user._id);
                      }}
                    />
                  );
                })}
              </>
            )}
            {loadingChat && <Spinner ml="auto" d="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SiderDrawer;
