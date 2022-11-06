import React, { useState } from "react";
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
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //   const testAPI = async () => {
  //     const data = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/chat`);
  //     console.log("data aapi", data);
  //   };
  //   useEffect(() => {
  //     testAPI();
  //   }, []);
  const loginHandler = async () => {
    const data = await axios.post(
      `${process.env.REACT_APP_BASE_API_URL}/user/login`,
      {
        email,
        password,
      }
    );
    console.log("data aapi", data);
  };
  return (
    <VStack spacing={"12px"}>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          value={email}
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
            value={password}
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
      <Button
        bg={"blue.100"}
        width="100%"
        onClick={() => {
          loginHandler();
        }}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
