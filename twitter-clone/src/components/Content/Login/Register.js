import React, { useState, useEffect } from "react";
import Modal, { contextType } from "react-modal";
import "./register.css";
import { RiCloseLine } from "react-icons/ri";
import db from "../../../firebase";

export default function Register() {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [findUser, setFindUser] = useState([]);
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    Modal.setAppElement("body");
    db.collection("users").onSnapshot((snaphot) =>
      setUsers(snaphot.docs.map((doc) => doc.data()))
    );
  }, []);

  const register = () => {
    users.forEach((user) => {
      if (user.username === userName && user.password === userPassword) {
        setFindUser(user);
        setIsLogin(true);
        setShowModal(false);
        db.collection("activeUser").add({
          username: user.username,
        });
      } else {
        setIsLogin(false);
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLogin(true);
    }, 5000);
  }, [isLogin]);

  return (
    <div className="register">
      <button onClick={() => setShowModal(true)} className="register-button">
        Giriş Yap
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
            onClick={register}
            className={
              "content-register-button " +
              (userName === "" || userPassword === "" ? "disable" : " ")
            }
          >
            Giriş Yap
          </button>
          {isLogin == false ? (
            <p className="kayit-notif olumsuz" style={{ display: "block" }}>
              Giriş Başarısız
            </p>
          ) : (
            ""
          )}
        </div>

        <button onClick={() => setShowModal(false)} className="close-button">
          <RiCloseLine color="#000" size="24" />
        </button>
      </Modal>
    </div>
  );
}
