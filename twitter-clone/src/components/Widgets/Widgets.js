import React from "react";
import WidgetFollow from "./WidgetFollow";
import "./widgets.css";
import WidgetSearch from "./WidgetSearch";

function Widgets() {
  return (
    <div className="widgets-container">
      <WidgetSearch />
      <div className="follow">
        <h3>Takip Edebileceğin Kişiler</h3>
        <WidgetFollow
          avatar="https://pbs.twimg.com/profile_images/1307851042135080961/E8PahYZZ_400x400.jpg"
          name="Harveen"
          username="servsneiiar"
        />
        <WidgetFollow
          avatar="https://pbs.twimg.com/profile_images/1307851042135080961/E8PahYZZ_400x400.jpg"
          name="Harveen"
          username="servsneiiar"
        />
        <WidgetFollow
          avatar="https://pbs.twimg.com/profile_images/1307851042135080961/E8PahYZZ_400x400.jpg"
          name="Harveen"
          username="servsneiiar"
        />
      </div>
    </div>
  );
}

export default Widgets;
