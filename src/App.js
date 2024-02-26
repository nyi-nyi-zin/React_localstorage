import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Parent root file

function App() {
  const DB_NAME = "PostDB";
  const END_POINT = "http://localhost:9000/posts";
  const initial = JSON.parse(localStorage.getItem(DB_NAME));
  let [posts, setPosts] = useState(initial || []);

  const AddNewPost = async (post) => {
    await fetch(END_POINT, {
      method: "POST",
      body: JSON.stringify({
        title: post.title,
        desc: post.desc,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    setPosts([post, ...posts]);
  };

  useEffect(() => {
    const fetchData = async () => {
      let data = await (await fetch(`${END_POINT}/posts`)).json();
      setPosts(data);
    };
  }, []);

  const deleteHander = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="container">
      <h1 className="text-center text-info my-3">Posts</h1>

      <Router>
        <Routes>
          <Route
            path="/"
            element={<Post posts={posts} removePost={deleteHander} />}
          />
          <Route path="/add" element={<AddPost addPost={AddNewPost} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
