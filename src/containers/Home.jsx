import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

export default function home(props) {
  return (
    <div>
      <Title level={3}>Dash boash</Title>
      <Content>

      </Content>
    </div>
  );
}

home.displayName = 'Home';
