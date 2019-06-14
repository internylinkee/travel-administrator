import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

export default function members(props) {
  return (
    <div>
      <Title level={3}>Danh sách thành viên</Title>
      <Content>

      </Content>
    </div>
  );
}

members.displayName = 'Members';
