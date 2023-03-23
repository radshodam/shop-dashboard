import React from "react";

import { Link } from "react-router-dom";
import {
  MdLineStyle,
  MdOutlineAnalytics,
  MdOutlineAttachMoney,
  MdOutlineDynamicFeed,
  MdOutlineEmail,
  MdOutlineMarkChatUnread,
  MdOutlinePermIdentity,
  MdPermIdentity,
  MdReportGmailerrorred,
  MdStackedBarChart,
  MdStorefront,
  MdTimeline,
  MdTrendingUp,
  MdWorkOutline,
} from "react-icons/md";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <MdLineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <MdOutlineAnalytics className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdTrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <MdOutlinePermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidebarListItem">
                <MdPermIdentity className="sidebarIcon" />
                New User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <MdStorefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <MdOutlineAttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <MdStackedBarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdOutlineEmail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <MdOutlineDynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MdOutlineMarkChatUnread className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdWorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdReportGmailerrorred className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
