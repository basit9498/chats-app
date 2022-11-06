import { Box } from "@chakra-ui/react";
import React from "react";
import MyChat from "../../components/MyChat";
import MyChatBox from "../../components/MyChatBox";
import SiderDrawer from "../../components/SiderDrawer";

const Index = () => {
  return (
    <Box width={"100%"}>
      <SiderDrawer />
      <Box
        display={"flex"}
        justifyContent="space-between"
        width="100%"
        h="91.5vh"
        p="10px"
      >
        <MyChat />
        <MyChatBox />
      </Box>
    </Box>
  );
};

export default Index;
