import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userImg, setUserImg] = useState("");
  const [progress, setProgress] = useState(0);
  return (
    <UserContext.Provider value={{ token, setToken, userImg, setUserImg, progress, setProgress }}>
      {children}
    </UserContext.Provider>
  );
};
