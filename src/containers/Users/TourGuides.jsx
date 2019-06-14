import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

export default function tourGuides(props) {
  return (
    <div>
      <Title level={3}>Danh sách hướng dẫn viên</Title>
      <Content>

      </Content>
    </div>
  );
}

tourGuides.displayName = 'TourGuides';
