import React from "react";
import "./post.css";
import { RiMoreFill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { RiShareFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

function Post({ avatar, name, username, text, postImage, verified }) {
  return (
    <div className="post-container">
      <img src={avatar} className="post-avatar" />
      <div className="post-content">
        <div className="post-header">
          <div className="header-title">
            <h3 className="header-name">{name}</h3>
            {verified && <MdVerifiedUser color="#1DA1F2" />}
            <p className="header-username">@{username}</p>
          </div>
          <div className="header-action">
            <RiMoreFill size="20" />
          </div>
        </div>
        {text && <p className="post-text">{text}</p>}
        {postImage && <img src={postImage} className="post-image" />}
        <div className="post-action-icons">
          <FaRegComment size="20" />
          <FaRetweet size="20" />
          <AiOutlineHeart size="20" />
          <RiShareFill size="20" />
        </div>
      </div>
    </div>
  );
}

export default Post;
