import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../container/Home";
import ChatPage from "../container/Chat";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
