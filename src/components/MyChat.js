import { AddIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const MyChat = () => {
  return (
    <>
      <Box width={"31%"} bg="white" borderRadius="lg" p={4}>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Text> My Chats</Text>
          <Button rightIcon={<AddIcon />}>New Group Chat</Button>
        </Box>

        <Box
          bg={"#ddd"}
          p={2}
          mt="12px"
          display={"flex"}
          borderRadius="lg"
          cursor="pointer"
          _hover={{
            backgroundColor: "#4a9ae0",
            color: "#fff",
          }}
        >
          <Box>
            <Avatar />
          </Box>
          <Box marginLeft={"12px"}>
            <Text>User Name</Text>
            <Text fontSize={"sm"}>Last message</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyChat;
