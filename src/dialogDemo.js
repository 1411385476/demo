import React from "react";
import { Tabs } from "antd";
import ReactDOM from "react-dom";
import StepOne from "./inputdialog";

const { TabPane } = Tabs;

const Demo = () => (
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Tab 1" key="1">
      <StepOne />
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Ta Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

ReactDOM.render(<Demo />, document.getElementById("container"));
