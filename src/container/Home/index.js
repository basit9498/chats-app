import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import { ChatStore } from "../../context/AppContext";

const Index = () => {
  const nagivation = useNavigate();
  const { setUser } = ChatStore();
  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      console.log("JSON", JSON.parse(localStorage.getItem("user_data")));
      setUser(JSON.parse(localStorage.getItem("user_data")));
      nagivation("/chat");
    }
    setUser(JSON.parse(localStorage.getItem("user_data")));
  }, []);
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        display={"flex"}
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        margin="40px 0 15px 0"
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text fontSize={"4xl"} fontFamily={"Work Sans"} color="black">
          My Chat App
        </Text>
      </Box>
      <Box
        bg={"white"}
        width={"100%"}
        p={4}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Index;
