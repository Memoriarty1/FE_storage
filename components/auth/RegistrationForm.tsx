import React, { useCallback } from 'react'
import styles from './Auth.module.scss';

import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';

import * as Api from "@/api";
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';


type FieldType = {
  registrationEmail?: string;
  fullName?: string;
  registrationPassword?: string;
};

const RegistrationForm = () => {
  const router = useRouter();

  const onSubmit = useCallback(async (values: any) => {
    try {
      const registrationData = { email: values.registrationEmail, password: values.registrationPassword, fullName: values.fullName }
      const { token } = await Api.auth.registration(registrationData);

      if (token) {
        setCookie(null, "_token", token, { path: "/" });
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

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  // const handleSubmeit = (email: string, password: string) => {
  //   console.log('Failed:', email, password);
  // };

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
          name="registrationEmail"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="registrationPassword"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<FieldType>
          label="Full name"
          name="fullName"
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>

  )
}
export default RegistrationForm;