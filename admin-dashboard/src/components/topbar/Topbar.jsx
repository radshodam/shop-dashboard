import React from "react";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SabzLearn ❤</span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            {/* <NotificationsIcon /> */}
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {/* <LanguageIcon /> */}
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {/* <SettingsIcon /> */}
          </div>
          <img src="images/profile.jfif" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
