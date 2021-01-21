import React from "react";
import "./index.css";

export function NewsList(props) {
  // const { next, jump } = props;
  return (
    <div className="home-first-dialog">
      <div className="dialog-title">步解锁直播功能</div>
      <div className="home-first-dialog-left">
        <img src="https://i.gsxcdn.com/0cms/d/file/content/2019/10/5da6bd6e0837e.png" />
      </div>
      <div className="home-first-dialog-right">
        <span>欢迎来到微师</span>
        <span>让我们1分钟带你了解微师</span>
        <button className="classic-btn pink-btn button1">开始了解</button>
      </div>
      <div className="home-first-dialog-back">
        <img
          src="https://i.gsxcdn.com/0cms/d/file/content/2019/10/5da6bd6dc6a84.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default NewsList;
