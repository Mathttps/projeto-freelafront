import React, { createContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token") ?? "");

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
