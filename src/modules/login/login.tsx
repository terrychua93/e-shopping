import { Button, Card, Form, Input } from 'antd';
import {FC, useState} from 'react';
import './login.css'
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginComponent: FC = () =>{
    const [isLoading, setLoading] = useState(false);
    const onFinish = (values: any) => {
        setLoading(true);
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="bg-img">
            <div className="login__container">
                <Card className="login__card" bordered={false} style={{ width: 330, height: 400 }}>
                    <p className="login__title">Login</p>

    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="Enter your username" size="large" prefix={<UserOutlined />}/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
            <Input.Password
      placeholder="Enter your password"
      size="large"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      prefix={<LockOutlined />}/>
      </Form.Item>

      <Form.Item >
        <Button className="login__button" type="primary" htmlType="submit" size="large" loading={isLoading}>
          SIGN IN
        </Button>
      </Form.Item>
    </Form>
    <p className="text-center">Not a member? <a href="#">Sign up now</a></p>
    <p className="text-center"><a href="#">Forgot Password?</a></p>

                </Card>
            </div>

        </div>
    );
}

export default LoginComponent;