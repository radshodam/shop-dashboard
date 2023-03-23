import React from "react";
import { MdLanguage, MdOutlineNotificationsActive, MdOutlineSettings } from "react-icons/md";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Radshodam-Dashboard</span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <MdOutlineNotificationsActive className="topbarIcon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdLanguage className="topbarIcon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdOutlineSettings className="topbarIcon" />
          </div>
          <img src="images/profile.jfif" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
