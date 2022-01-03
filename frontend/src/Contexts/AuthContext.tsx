import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => void;
  emailUser: any;
  setEmailUser: any;
}

type SignInCredentials = {
  email?: string;
  cpf?: string;
  password: string;
};

type User = {
  avatar?: string;
  email: string;
  name: string;
  cpf: string;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: any) => {
  const [emailUser, setEmailUser] = useState<User>({} as User);

  function signIn({ cpf, email, password }: SignInCredentials) {  
    if(cpf){
      axios
      .post("http://localhost:3001/login", { cpf: cpf, password: password })
      .then((response: any) => {
        const { email } = response.data.user;
        localStorage.setItem("User", `${email}`);
        const { token } = response.data;
        const { administrator } = response.data.user;
        localStorage.setItem("admin", `${administrator}`);
        localStorage.setItem("Authorization", `${token}`);
        window.location.reload();
      })
      .catch(() => {
        toast.error("Email ou senha incorretos!");
      });

    }
    if(email){
      axios
      .post("http://localhost:3001/login", { email: email, password: password })
      .then((response: any) => {
        const { email } = response.data.user;
        localStorage.setItem("User", `${email}`);
        const { token } = response.data;
        const { administrator } = response.data.user;
        localStorage.setItem("admin", `${administrator}`);
        localStorage.setItem("Authorization", `${token}`);
        window.location.reload();
      })
      .catch(() => {
        toast.error("Email ou senha incorretos!");
      });
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, emailUser, setEmailUser }}>
      {children}
    </AuthContext.Provider>
  );
};
