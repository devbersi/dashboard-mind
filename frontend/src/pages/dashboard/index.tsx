import React, { useState } from "react";
import { DashboardPage, SideBar, DivClose, DivLogOut, DivButtons, SideBarInative } from "./styles/dashboard";
import { IoMdClose } from 'react-icons/io';

export const Dashboard = () => {
    const [navbar, setNavbar ] = useState(true);

  return (
      <DashboardPage>
          <SideBar>
              <DivClose><IoMdClose/></DivClose>
              <DivButtons>
                  <p>Home</p>
                  <p>Dashboard</p>
              </DivButtons>
              <DivLogOut>
                  <p>Sair</p>
              </DivLogOut>
          </SideBar>
          <div></div>
      </DashboardPage>
  );
};
