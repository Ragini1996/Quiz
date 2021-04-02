import React, { Component } from "react";
class UserDetails extends Component {
  state = { name: "" };
  handleChange = (e) => {
    const { currentTarget: input } = e;
    this.setState({ name: input.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center text-warning">Quiz</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Enter your Name</label>

            <input
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary">Start Game</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserDetails;
