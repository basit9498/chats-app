import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { getSender, getSenderFull } from "../config/ChatLogics";
import { ChatStore } from "../context/AppContext";
import GetChatDetail from "./GetChatDetail";
import Profile from "./Profile";
import UpdateGroupChatModal from "./UpdateGroupChatModal";

const MyChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat, setSelectedChat, user } = ChatStore();
  console.log("user_data", user);
  return (
    <>
      <Box
        width={{ base: "100%", md: "70%" }}
        p={3}
        bg="white"
        marginLeft={"12px"}
        borderRadius="lg"
        display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
        // alignItems="center"
        flexDir="column"
      >
        {selectedChat && (
          <Box
            mb={"12px"}
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />
            {/* <Text>User Name</Text> */}
            {/* <Profile /> */}
            {true &&
              (!selectedChat?.isGroupChat ? (
                <>
                  {/* {getSender(user, selectedChat?.users)} */}
                  <Text>
                    {getSender(
                      JSON.parse(localStorage.getItem("user_data")),
                      selectedChat?.users
                    )}
                  </Text>
                  <Profile
                    user={getSenderFull(
                      JSON.parse(localStorage.getItem("user_data")),
                      selectedChat.users
                    )}
                  />
                </>
              ) : (
                <>
                  {selectedChat.chat.toUpperCase()}
                  <UpdateGroupChatModal
                    // fetchMessages={fetchMessages}
                    fetchAgain={fetchAgain}
                    setFetchAgain={setFetchAgain}
                  />
                </>
              ))}
          </Box>
        )}

        {/* Signal Chat */}
        <GetChatDetail fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </Box>
    </>
  );
};

export default MyChatBox;
