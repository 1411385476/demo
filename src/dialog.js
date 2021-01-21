import { List } from "antd";
import React, { Component } from "react";

const TitleList = (props) => {
  return <ul></ul>;
};

const ListItem = (props) => {
  return <li>{props.title}</li>;
};

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        {
          title: "第一条",
          description: "第一天"
        },
        {
          title: "第二条",
          description: "第二天"
        },
        {
          title: "第三条",
          description: "第三天"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <TitleList content={this.state.content} />
      </div>
    );
  }
}

export default Dialog;
