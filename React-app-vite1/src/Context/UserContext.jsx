import React, { useState } from "react";
// step 1 context Create

export const USERContext = React.createContext(null);

// STEP 2
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isUser, setIsUser] = useState(false);

  const login = () => {
    setUser("yashu");
    setIsUser(true);
  };
  const logout = () => {
    setUser(null);
    setIsUser(false);
  };
  //   const user = "lavi";
  return (
    <USERContext.Provider value={{ user, login, logout, isUser }}>
      {children}
    </USERContext.Provider>
  );
};
