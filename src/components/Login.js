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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatStore } from "../context/AppContext";

const Login = () => {
  const nagivation = useNavigate();
  const { setUser } = ChatStore();
  const [email, setEmail] = useState("test3@gmail.com");
  const [password, setPassword] = useState("12345678");
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
    if (data?.status === 200) {
      console.log("data?.data?.user_data", data?.data?.user_data);
      localStorage.setItem("user_token", data?.data?.token);
      localStorage.setItem("user_data", JSON.stringify(data?.data?.user_data));
      setUser(data?.data?.user_data);
      nagivation("/chat");
    }
  };

  return (
    <VStack spacing={"12px"}>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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
