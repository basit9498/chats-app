import { AddIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Stack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { ChatStore } from "../context/AppContext";
import { getSender } from "../config/ChatLogics";
import GroupModel from "./GroupModel";

const MyChat = ({ fetchAgain }) => {
  const [loggedUser, setLoggUser] = useState();
  const { user, selectedChat, setSelectedChat, chat, setChat } = ChatStore();
  const toast = useToast();

  const fetchChat = async (id) => {
    try {
      const token = localStorage.getItem("user_token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const data = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/chat/me`,
        config
      );
      if (data.status === 200) {
        // setSearchResult(data?.data?.user_list);
        setChat(data?.data?.user_chats);
      }

      console.log("data", data);
    } catch (error) {
      toast({
        title: "Fail Fetching",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  useEffect(() => {
    setLoggUser(JSON.parse(localStorage.getItem("user_data")));
    fetchChat();
  }, [fetchAgain]);
  return (
    <>
      <Box
        width={{ base: "100%", md: "30%" }}
        bg="white"
        borderRadius="lg"
        p={4}
        display={{ base: selectedChat ? "none" : "block", md: "block" }}
      >
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Text> My Chats</Text>
          <GroupModel>
            <Button rightIcon={<AddIcon />}>New Group Chat</Button>
          </GroupModel>
        </Box>
        {chat && (
          <Stack overflowY={"scroll"}>
            {chat?.map((_chat) => {
              return (
                <Box
                  onClick={() => setSelectedChat(_chat)}
                  cursor="pointer"
                  bg={selectedChat === _chat ? "#38B2AC" : "#E8E8E8"}
                  color={selectedChat === _chat ? "white" : "black"}
                  p={2}
                  mt="12px"
                  display={"flex"}
                  borderRadius="lg"
                  _hover={{
                    backgroundColor: "#38B2AC",
                    color: "white",
                  }}
                >
                  <Box>
                    <Avatar
                      name={
                        !_chat.isGroupChat
                          ? getSender(loggedUser, _chat.users)
                          : _chat.chat
                      }
                    />
                  </Box>
                  <Box marginLeft={"12px"}>
                    {!_chat.isGroupChat
                      ? getSender(loggedUser, _chat.users)
                      : _chat.chat}
                    <Text fontSize={"sm"}>Last message</Text>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        )}
      </Box>
    </>
  );
};

export default MyChat;
