import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserListItem = ({ users, handleFunction }) => {
  return (
    <>
      <Box
        onClick={() => {
          handleFunction();
        }}
        cursor="pointer"
        bg={"#e8e8e8"}
        _hover={{
          backgroundColor: "#38b2ac",
          color: "white",
        }}
        w={"100%"}
        display={"flex"}
        alignItems="center"
        color={"black"}
        px={3}
        py={2}
        mb={2}
        borderRadius="lg"
      >
        <Avatar
          mr={2}
          size="sm"
          cursor={"pointer"}
          name={users.name}

          // src=
        />
        <Box>
          <Text>{users?.name}</Text>
          <Text>{users.email}</Text>
          {/* For latter we will display the last message */}
        </Box>
      </Box>
    </>
  );
};

export default UserListItem;
