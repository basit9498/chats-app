import { useState } from "react";
import { createContext, useContext } from "react";

const Context = createContext();

const AppContext = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chat, setChat] = useState([]);

  const value = {
    user,
    setUser,
    selectedChat,
    setSelectedChat,
    chat,
    setChat,
  };
  return (
    <>
      <Context.Provider value={value}>{children}</Context.Provider>
    </>
  );
};

export const ChatStore = () => {
  return useContext(Context);
};

export default AppContext;
