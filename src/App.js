import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
//Parent root file

function App() {
  const DB_NAME = "POSTDB";
  const initial = JSON.parse(localStorage.getItem(DB_NAME));
  let [posts, setPosts] = useState(initial) || [];

  const AddNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  useEffect(() => {
    localStorage.setItem(DB_NAME, JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    let data = localStorage.getItem(DB_NAME);
    if (data) {
      setPosts(JSON.parse(data));
    }
  }, []);

  const deleteHander = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="container">
      <h1 className="text-center text-info my-3">Posts</h1>
      <Post posts={posts} removePost={deleteHander} />
      <AddPost addPost={AddNewPost} />
    </div>
  );
}

export default App;
