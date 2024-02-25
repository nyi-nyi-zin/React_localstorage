import React from "react";
import { Component } from "react";
import PostCard from "./postcard";
//Child File,Parent of postcard.js file

class Post extends Component {
  render() {
    console.log(this);
    return (
      <div>
        {this.props.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default Post;
