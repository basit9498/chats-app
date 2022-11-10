import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MyChat from "../../components/MyChat";
import MyChatBox from "../../components/MyChatBox";
import SiderDrawer from "../../components/SiderDrawer";
import { ChatStore } from "../../context/AppContext";

const Index = () => {
  const { user, setUser } = ChatStore();
  const [fetchAgain, setFetchAgain] = useState(false);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user_data")));
  }, []);
  return (
    <Box width={"100%"}>
      <SiderDrawer user={user} />
      <Box
        display={"flex"}
        // justifyContent="space-between"
        width="100%"
        h="91.5vh"
        p="10px"
      >
        <MyChat fetchAgain={fetchAgain} />
        <MyChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </Box>
    </Box>
  );
};

export default Index;
