import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

export default function admins(props) {
  return (
    <div>
      <Title level={3}>Danh sách quản trị viên</Title>
      <Content>

      </Content>
    </div>
  );
}

admins.displayName = 'Admins';
