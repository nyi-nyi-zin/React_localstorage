import React from "react";
import { Component } from "react";
import PostCard from "./postcard";
import { Link } from "react-router-dom";
//Child File,Parent of postcard.js file

class Post extends Component {
  remove(id) {
    this.props.removePost(id);
  }
  render() {
    const { posts } = this.props;

    return (
      <div>
        <Link to="/add">
          <button className="btn btn-sm btn-primary float-end">
            Add<i className="fa fa-add"></i>
          </button>
        </Link>
        <br />
        <br />
        {posts &&
          posts.length > 0 &&
          posts.map((post) => (
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
