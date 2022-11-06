import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Profile from "./Profile";

const SiderDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  return (
    <Box
      display={"flex"}
      justifyContent="space-between"
      alignItems={"center"}
      bg="white"
      p={"5px 10px 5px 10px"}
      borderWidth="5px"
    >
      <Tooltip label="Search User " hasArrow placement="bottom-end">
        <Button>
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
              name="Abdul Basit"
              //  src=""
            />
          </MenuButton>
          <MenuList>
            <Profile>
              <MenuItem>My Profile</MenuItem>
            </Profile>

            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default SiderDrawer;
