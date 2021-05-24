import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./login.css";
import { RiCloseLine } from "react-icons/ri";
import db from "../../../firebase";

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [isRegister, setIsRegister] = useState();

  const login = () => {
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].username === userName) {
        setIsRegister(false);
        console.log("girdi1");
        break;
      } else {
        setIsRegister(true);
        console.log("girdi1");
      }
    }
  };
  toggleAccount.style.visibility = "inherit";
  toggleAccount.style.opacity = "1";

  const imageIconButton = document.querySelector(".list-account-info ");
  const toggleAccount = document.querySelector(".toggle-account ");

  useEffect(() => {
    if (isRegister === true) {
      db.collection("users").add({
        username: userName,
        password: userPassword,
      });
    } else {
    }
  }, [isRegister]);
  useEffect(() => {
    db.collection("users").onSnapshot((snaphot) =>
      setAllUsers(snaphot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="login">
      <button onClick={() => setShowModal(true)} className="login-button">
        Kayıt Ol
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Selected Option"
      >
        <div className="content">
          <input
            type="text"
            placeholder="Kullanıcı Adı"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Şifre"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={login}
            className={
              "content-login-button " +
              (userName === "" || userPassword === "" ? "disable" : " ")
            }
          >
            Kayıt Ol
          </button>
          {isRegister === false ? (
            <p className="olumsuz" style={{ display: "block " }}>
              Kullanıcı Adı Kullanılıyor.
            </p>
          ) : (
            <p className="olumlu" style={isRegister && { display: "block " }}>
              Kayıt Başarılı.
            </p>
          )}
        </div>
        <button onClick={() => setShowModal(false)} className="close-button">
          <RiCloseLine color="#000" size="24" />
        </button>
      </Modal>
    </div>
  );
}

export default Login;
