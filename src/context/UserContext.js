import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const storeUser = (dataUser) => {
    localStorage.setItem("user", JSON.stringify(dataUser));
    setUser(dataUser);
  };

  const removeUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, storeUser, removeUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
