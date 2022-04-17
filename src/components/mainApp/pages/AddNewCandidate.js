import React from "react";
import "./AddNewCandidate.css";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";

export default function AddNewCandidate() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Candidate Name"
        name="Candidate Name"
        rules={[
          {
            required: true,
            message: "Please input Candidate Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: "Please input Email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Qualification"
        name="Qualification"
        rules={[
          {
            required: true,
            message: "Please input Qualification!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="Age"
        rules={[
          {
            required: true,
            message: "Please input Age!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact Number"
        name="Contact Number"
        rules={[
          {
            required: true,
            message: "Please input Contact Number!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Address"
        name="Address"
        rules={[
          {
            required: true,
            message: "Please input Address!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
