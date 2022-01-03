import { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../../images/logo.png";
import { useHistory } from "react-router-dom";
import "./styles/sidebar.scss";
import { AuthContext } from "../../Contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Sidebar = () => {
  function enterHome() {
    window.location.reload();
  }

  function logOut() {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("User");
    localStorage.removeItem("admin");
    window.location.reload();
    toast.error("Token expirado ou inexistente, faça o Login novamente!");
  }

  return (
    <div className="Navbar">
      <img className="ImageLogo" src={Logo} alt="Mind Consulting" />
      <div className="buttons">
        <button className="navbarButton" onClick={enterHome}>
          {" "}
          <HomeIcon />
          Home
        </button>
      </div>
      <button className="ExitButton" onClick={logOut}>
        <LogoutIcon />
        Exit
      </button>
      <ToastContainer />
    </div>
  );
};
