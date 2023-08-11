import React from "react";
import HeaderLogo from "./HeaderLogo";
// import SearchPanel from "./SearchPanel";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <HeaderLogo />
        <h2>UKO</h2>
      </div>
      <SearchIcon className="search icon" />
      <div className="header-icons">
        <MenuIcon className="burger icon" />
        <LightModeIcon className="sun icon" />
        <FlagCircleOutlinedIcon className="flag icon" />
        <NotificationsNoneOutlinedIcon className="notification icon" />
        <AppsRoundedIcon className="apps icon" />
        <div className="account-icon">
          <p>
            Hi, <span>Aaron Cooper</span>
          </p>
          <FaceRoundedIcon className="face icon" />
        </div>
      </div>
    </div>
  );
}
