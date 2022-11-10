import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformpassword, setconformPassword] = useState("");
  const [pic, setPic] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <VStack spacing={"12px"}>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => {
            setEmail(e.email.value);
          }}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <InputRightElement with="4.5rem">
            <Button
              h={"1.75rem"}
              size="sm"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* conform pass */}
      <FormControl id="password" isRequired>
        <FormLabel>Conform Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => {
              setconformPassword(e.target.value);
            }}
          />
        </InputGroup>
      </FormControl>
      {/* User image */}
      <FormControl>
        <FormLabel>Image</FormLabel>
        <Input
          type={"file"}
          p={1.5}
          accept="image/*"
          onClick={(e) => {
            setPic(e.target.file[0]);
          }}
        />
      </FormControl>
      <Button bg={"blue.100"} width="100%">
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
