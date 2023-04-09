import React from "react";
import "../style.css";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TranslateIcon from "@mui/icons-material/Translate";
import AdminImg from '../Images/c41eb50942cc495096767ede7ddc6d8f.png'
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"> Somin's Blog</span>
        </div>
        {/* <div className="topRight">
          <div className="topbarIconContainer">
            <MarkEmailUnreadIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsSuggestIcon />
          </div>
          <div className="topbarIconContainer">
            <TranslateIcon />
          </div>
          <img
            src="https://media.gettyimages.com/photos/in-this-image-released-on-november-22-dua-lipa-performs-onstage-for-picture-id1287136071?k=20&m=1287136071&s=612x612&w=0&h=m-UhJ3lGQWN8NoVTJMTRDjEIOwdYvr2kSh1GRbkTt7w="
            alt="avtar"
            className="topAvatar"
          ></img>
        </div> */}
      </div>
    </div>
  );
};

export default Topbar;
