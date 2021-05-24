import React from "react";
import "./widgetSearch.css";
import { RiSearch2Line } from "react-icons/ri";

function WidgetSearch() {
  return (
    <div className="widget-search">
      <RiSearch2Line size="20" className="search-icon" color="#272727" />
      <input type="text" placeholder="Twitter'da Ara" />
    </div>
  );
}

export default WidgetSearch;
