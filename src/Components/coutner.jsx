import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    // imgURL: "https://picsum.photos/400",
  };
  styles = {
    h1: {
      fontSize: "1.4rem",
      fontWeight: "bold",
    },
    button: {
      border: "2px solid black",
    },
  };
  render() {
    // different way of doing classes
    this.getBadgeClasses();

    return (
      <>
        {/* <img
          style={{ border: "5px dashed pink" }}
          src={this.state.imgURL}
          alt=""
        /> */}
        <h1
          style={this.styles.h1}
          className={this.getBadgeClasses()}
          // {
          //   this.state.count === 0
          //     ? "badge badge-warning m-2"
          //     : "badge badge-primary m-2"
          // }
        >{`count: ${this.formatCount()}`}</h1>

        <button
          style={this.styles.button}
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          increment
        </button>

        {this.formatTags()}
      </>
    );
  }

  getBadgeClasses() {
    let h1Class = "badge m-3 badge-";
    h1Class += this.state.count === 0 ? "warning" : "primary";
    return h1Class;
  }

  formatCount() {
    const { count: c } = this.state;
    return c === 0 ? "Zero" : c;
  }

  formatTags() {
    const tags = this.state.tags;
    return tags.length === 0 ? (
      <p>There are no tags</p>
    ) : (
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement() {
    this.state.count = this.state.count + 1;
  }
}

export default Counter;
