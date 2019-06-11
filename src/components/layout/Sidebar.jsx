import React from 'react';
import {
  Menu,
  Icon,
  Typography,
  Layout
} from 'antd';

const { SubMenu } = Menu;
const { Title } = Typography;
const { Sider } = Layout;

export default function sidebar(props) {
  return (
    <Sider width={300}>
      <div className="logo">
        <Title level={2}>VietNamGo Travel</Title>
      </div>
      <Menu defaultSelectedKeys={['1']} mode="inline" theme="light">
        <Menu.Item key="1">
          <Icon type="area-chart" />
          <span>Dashboard</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="read" />
          <span>Bài viết</span>
        </Menu.Item>
        <SubMenu
          key="3"
          title={(
            <span>
              <Icon type="user" />
              User
            </span>
          )}
        >
          <Menu.Item key="item1">Member</Menu.Item>
          <Menu.Item key="item2">Tour Guide</Menu.Item>
          <Menu.Item key="item3">Admin</Menu.Item>
        </SubMenu>
        <Menu.Item key="4">
          <Icon type="warning" />
          <span>Report</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

sidebar.displayName = 'Sidebar';
