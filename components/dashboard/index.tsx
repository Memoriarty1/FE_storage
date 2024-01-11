import { Button } from 'antd'
import React, { useCallback } from 'react'

import * as Api from "@/api";

const Dashboard = () => {
  const onLogout = useCallback(() => {
    Api.auth.logout();
  }, [])
  return (
    <div>
      <Button type="primary" size="small" onClick={onLogout}>
        Logout
      </Button>
    </div>
  )
}

export default Dashboard