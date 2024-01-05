
import React, { useCallback } from 'react'

import styles from './Auth.module.scss';
import { setCookie } from "nookies";
import { Form, Input, Button, Checkbox, notification } from 'antd';
// import { cookies } from 'next/headers'

import axios from 'axios';
import { LoginFormDTO } from '@/api/dto/auth.dto';

import * as Api from "@/api";
import { useRouter } from 'next/navigation';

type FieldType = {
  email: string;
  password: string;
  remember: string;
};

const LoginForm = () => {
  const router = useRouter();

  const onSubmit = useCallback(async (values: LoginFormDTO) => {
    try {

      // Api.auth.login(value)
      // const responce = await axios.post('http://localhost:7777/auth/login',
      //   { email: values.email, password: values.password });
      // console.log(responce);

      const { token } = await Api.auth.login({ email: values.email, password: values.password });
      // console.log(responce)

      if (token) {
        setCookie(null, "_token", token, { path: "/" });
        // cookies().set({
        //   name: '_token',
        //   value: token,
        //   // httpOnly: true,
        //   path: '/',
        // })
        notification.success({
          message: 'Goood job!',
          description: 'Going to admin panel...',
          duration: 2,
        });
        router.push("/dashboard");
      }

    } catch (err) {
      console.log(err)
    }
  }, []);

  const onFinishFailed = useCallback((errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }, []);
  return (

    <div className={styles.formContainer}>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<FieldType>
          label="E-Mail"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>

  )
}

export default LoginForm;