import React, { useState, useEffect } from "react";
import "./postTweet.css";
import { AiOutlineFileGif } from "react-icons/ai";
import { RiSurveyLine, RiSendPlane2Line } from "react-icons/ri";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoMdImages } from "react-icons/io";
import db from "../../../firebase";

function PostTweet() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const getTime = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return `${date}${time}`;
  };

  const sendTweet = (e) => {
    e.preventDefault();
    if (tweetMessage != "") {
      db.collection("posts").add({
        name: "Test User",
        username: "testusername",
        avatar:
          "https://pbs.twimg.com/profile_images/1307851042135080961/E8PahYZZ_400x400.jpg",
        verified: true,
        text: tweetMessage,
        postImage: tweetImage,
        time: getTime(),
      });

      setTweetImage("");
      setTweetMessage("");
    }
  };

  getTime();

  return (
    <div className="post-tweet-container">
      <img
        src="https://pbs.twimg.com/profile_images/1307851042135080961/E8PahYZZ_400x400.jpg"
        className="avatar"
      />
      <div className="post-tweet-content">
        <input
          type="text"
          placeholder="Neler Oluyor?"
          value={tweetMessage}
          onChange={(e) => setTweetMessage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Resim URL?"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <div className="actions">
          <div className="action-icons">
            <IoMdImages size="24" color="#1DA1F2" />
            <AiOutlineFileGif size="24" color="#1DA1F2" />
            <RiSurveyLine size="24" color="#1DA1F2" />
            <HiOutlineEmojiHappy size="24" color="#1DA1F2" />
            <RiSendPlane2Line size="24" color="#1DA1F2" />
          </div>
          <button type="submit" onClick={sendTweet} className="post-tweet">
            Tweetle
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostTweet;
