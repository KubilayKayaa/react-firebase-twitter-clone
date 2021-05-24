import React from "react";
import "./sidebar.css";
import { AiOutlineTwitter, AiFillMessage } from "react-icons/ai";
import { HiHome, HiUserCircle } from "react-icons/hi";
import { MdExplore } from "react-icons/md";
import { IoMdNotifications, IoMdListBox } from "react-icons/io";
import { BsBookmarks } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  return (
    <div className="sidebar-container">
      {/* Logo */}
      <AiOutlineTwitter size="40" color="#1DA1F2" className="sidebar-logo" />

      {/* Links */}
      <SidebarLink Icon={HiHome} text="Anasayfa" active="true" />
      <SidebarLink Icon={MdExplore} text="Keşfet" />
      <SidebarLink Icon={IoMdNotifications} text="Bildirimler" />
      <SidebarLink Icon={AiFillMessage} text="Mesajlar" />
      <SidebarLink Icon={BsBookmarks} text="Yer İşaretleri" />
      <SidebarLink Icon={IoMdListBox} text="Listeler" />
      <SidebarLink Icon={HiUserCircle} text="Profil" />
      <SidebarLink Icon={CgMoreO} text="Daha fazla" />

      {/* Tweet Button */}
      <button className="tweet-button">Tweet</button>
    </div>
  );
}

export default Sidebar;
