import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
//Parent root file

function App() {
  const DB_NAME = "POSTDB";
  let [posts, setPosts] = useState([]);

  const AddNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  useEffect(() => {
    localStorage.setItem(DB_NAME, JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    let data = localStorage.getItem(DB_NAME);
    if (data) {
      let parsedData = JSON.parse(data);
      setPosts(parsedData);
    }
    console.log(setPosts);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-info my-3">Posts</h1>
      <Post posts={posts} />
      <AddPost addPost={AddNewPost} />
    </div>
  );
}

export default App;
