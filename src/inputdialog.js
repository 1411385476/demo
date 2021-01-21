import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, Button, Select, DatePicker } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};
// 单节课预计时长配置
const courseLengthOption = [
  {
    name: "30分钟",
    key: "30"
  },
  {
    name: "45分钟",
    key: "45"
  },
  {
    name: "1小时",
    key: "60"
  },
  {
    name: "1.5小时",
    key: "90"
  },
  {
    name: "2小时",
    key: "120"
  },
  {
    name: "2.5小时",
    key: "150"
  },
  {
    name: "3小时",
    key: "180"
  },
  {
    name: "3.5小时",
    key: "210"
  },
  {
    name: "4小时",
    key: "240"
  }
];

const StepOne = () => {
  const [form] = Form.useForm();
  const onGenderChange = (value) => {};

  const onFinish = (values) => {
    console.log(values);
  };

  const onOpenChange = (open) => {
    console.log(open);
    if (!open) {
    }
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="courseName"
        label="课程名称"
        rules={[{ required: true }]}
      >
        <Input placeholder="我的课程" />
      </Form.Item>
      <Form.Item
        name="courseStartTime"
        label="上课时间"
        rules={[
          {
            required: true
          }
        ]}
      >
        <DatePicker onOpenChange={onOpenChange} />
      </Form.Item>
      <Form.Item
        name="courseTime"
        label="上课时长"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          {courseLengthOption.map((item) => {
            const { key, name } = item;
            return (
              <Option value={name} key={key}>
                {name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="ant-tabs-ink-bar">
          创建直播
        </Button>
      </Form.Item>
    </Form>
  );
};
export default StepOne;
//ReactDOM.render(<Demo />, document.getElementById("container"));
