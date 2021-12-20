import React, { useState } from "react";
import { IoMdClose } from 'react-icons/io';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import './styles/dashboard.scss';
import MaterialTable from 'material-table'

export const Dashboard = () => {
    const [navbar, setNavbar ] = useState(true);

  return (
      <div className="DashboardPage">
          <div className="Navbar">
            <img className="ImageLogo" src={Logo} alt="Mind Consulting" />
            <button className="ExitButton"><LogoutIcon/>Exit</button>
          </div>
          <div className="ContentDiv">
            <h3>Dashboard</h3>
            <MaterialTable
      title="Free Action Preview"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]}        
      actions={[
        {
          icon: 'add',
          tooltip: 'Add User',
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row")
        }
      ]}
    />
          </div>
          <div className="SecondContentDiv">
            <h3>table</h3>
          </div>
      </div>
  );
};
