import { Card, Button, Form, Input } from "antd";
import "@/pages/Login/index.scss";

const onFinish = (value) => {
  console.log(value);
};

const Login = () => (
  <div className="login">
    <Card className="login__container">
      <Form name="basic" validateTrigger="onBlur" onFinish={onFinish}>
        <Form.Item
          label="手机号"
          name="number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: "Please input valid number!",
            },
          ]}
        >
          <Input placeholder="Please input your phone number" />
        </Form.Item>

        <Form.Item
          label="验证码"
          name="code"
          rules={[
            {
              required: true,
              message: "Please input your code!",
            },
          ]}
        >
          <Input placeholder="Please input your code" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </div>
);
export default Login;
