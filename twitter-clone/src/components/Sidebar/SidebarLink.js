import React from "react";
import "./sidebarLink.css";

function SidebarLink({ Icon, text, active }) {
  const sidebarLinkActive = (activeLink) => {
    return activeLink ? "sidebarLink-active" : "";
  };

  return (
    <div className={`sidebarLink-container ${sidebarLinkActive(active)}`}>
      <Icon size="28" className="sidebarLink-icon" />
      <p>{text}</p>
    </div>
  );
}

export default SidebarLink;
