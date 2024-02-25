import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class AddPost extends Component {
  state = {
    title: "",
    desc: "",
  };

  addUser = (e) => {
    e.preventDefault();
    this.props.addPost({ id: uuid(), ...this.state });
  };
  render() {
    return (
      <div className="card bg-dark px-5">
        <h3 className="text-white text-center mt-3">Add New Post</h3>
        <form onSubmit={this.addUser}>
          <div className="mb-1">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={(e) => this.setState({ title: e.target.value })}
              value={this.state.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Post Desc
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              onChange={(e) => this.setState({ desc: e.target.value })}
              value={this.state.desc}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btm-sm float-end mb-3"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddPost;
