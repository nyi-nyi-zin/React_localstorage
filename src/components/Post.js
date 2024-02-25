import React from "react";
import { Component } from "react";
import PostCard from "./postcard";
//Child File,Parent of postcard.js file

class Post extends Component {
  remove(id) {
    this.props.removePost(id);
  }
  render() {
    console.log(this);
    return (
      <div>
        {this.props.posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            deletePost={this.remove.bind(this)}
          />
        ))}
      </div>
    );
  }
}

export default Post;
