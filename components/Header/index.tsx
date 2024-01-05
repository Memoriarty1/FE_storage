import React, { useCallback } from 'react';
import { Layout, Avatar, Menu, Popover, Button, Modal } from 'antd';
import styles from './Header.module.scss';
import * as Api from "@/api";
import { useRouter } from 'next/router';
import { CloudOutlined } from '@ant-design/icons';
import { parseCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export const Header: React.FC = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;


  const onLogout = useCallback(() => {
    Modal.confirm({
      title: 'Do you want to exit from your profile?',
      async onOk() {
        try {
          Api.auth.logout();
          router.push("/");
        } catch (e) {
          return console.log('Oops errors!');
        }
      },
      onCancel() { },
    })
  }, [])

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined />
            Storage
          </h2>

          <Menu
            className={styles.menu}
            theme='dark'
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => {
              router.push(key)
            }}
            items={[
              { key: '/dashboard', label: 'Main' },
              { key: '/dashboard/profile', label: 'Profile' },
            ]}
          />
        </div>
        <div className={styles.headerRight}>

          {/* <Button type="primary" size="small" onClick={onLogout}>
            Logout
          </Button> */}
          <Popover
            trigger='click'
            content={
              <Button type="primary" danger onClick={onLogout}>
                Exit
              </Button>}
          >
            <Avatar className={styles.avatar}>I I</Avatar>
          </Popover>
        </div>

      </div>

    </Layout.Header>
  )
}
