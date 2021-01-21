import React from "react";
import ReactDOM from "react-dom";
import "./steptwo.css";

const TwoStep = () => {
  return (
    <div className="step-two">
      <div>
        <div className="step-two_content">
          <img src="https://i.gsxcdn.com/50081290_cu2qp5tu.jpg" />
        </div>
        <div className="step-two_content">
          <div>下载客户端后即可体验直播功能</div>
          <a href="https://www.runoob.com/">下载客户端</a>
        </div>
      </div>
      <div>
        <button className="pink-btn_two_step">已安装，下一步</button>
      </div>
    </div>
  );
};

ReactDOM.render(<TwoStep />, document.getElementById("container"));
