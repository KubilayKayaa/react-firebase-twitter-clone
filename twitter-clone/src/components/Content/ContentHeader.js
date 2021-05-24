import React, { useState } from "react";
import "./contentHeader.css";
import Login from "./Login/Login";
import Register from "./Login/Register";

function ContentHeader() {
  return (
    <div className="content-header">
      <p>Anasayfa</p>
      <div className="login-inputs">
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default ContentHeader;
