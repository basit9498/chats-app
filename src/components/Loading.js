import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Stack>
      <Skeleton height="36px" />
      <Skeleton height="36px" />
      <Skeleton height="36px" />
    </Stack>
  );
};

export default Loading;
