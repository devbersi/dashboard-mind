import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { User } from "../pages/tableUser/types";
import { api } from "../services/api";

interface UserContextData {
  deleteUser: (userId: any) => void;
  rowUser: any;
  setRowUser: any;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: any) => {
  const token = localStorage.getItem("Authorization");
  const [rowUser, setRowUser] = useState<User>({} as User);

  function deleteUser(userId: any) {
    api
      .delete(`/delete/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Usuário removido com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao remover usuário!");
      });
  }

  return (
    <UserContext.Provider value={{ deleteUser, rowUser, setRowUser }}>
      {children}
    </UserContext.Provider>
  );
};
