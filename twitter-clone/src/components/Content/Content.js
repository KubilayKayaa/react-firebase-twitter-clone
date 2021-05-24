import React, { useState, useEffect } from "react";
import "./content.css";
import ContentHeader from "./ContentHeader";
import PostTweet from "./PostTweet/PostTweet";
import Post from "./Post/Post";
import db from "../../firebase";

function Content() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("time", "desc")
      .onSnapshot((snaphot) => setPosts(snaphot.docs.map((doc) => doc.data())));
  }, []);

  return (
    <div className="content-container">
      {/* Content Header */}
      <ContentHeader />

      {/* Post A Tweet */}
      <PostTweet />

      {/* Posts */}
      {posts &&
        posts.map((post, index) => (
          <Post
            key={index}
            name={post.name}
            username={post.username}
            avatar={post.avatar}
            text={post.text}
            postImage={post.postImage}
            verified={post.verified}
          />
        ))}
    </div>
  );
}

export default Content;
