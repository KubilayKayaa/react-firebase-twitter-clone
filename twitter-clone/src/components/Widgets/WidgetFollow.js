import React from "react";
import "./widgetFollow.css";

function WidgetFollow({ avatar, name, username }) {
  return (
    <div className="widget-follow">
      <img src={avatar} />
      <div className="follow-title">
        <p>{name}</p>
        <p>@{username}</p>
      </div>
      <button className="follow-button">Takip Et</button>
    </div>
  );
}

export default WidgetFollow;
