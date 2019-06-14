import React from 'react';
import {
  Menu,
  Icon,
  Typography,
  Layout
} from 'antd';
import { Link } from 'react-router-dom';

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
        {/* TODO: Chưa xử lý được sự kiện Active khi click lần đầu của Menu.Item */}
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="area-chart" />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="2"
          title={(
            <span>
              <Icon type="read" />
              Post
            </span>
          )}
        >
          <Menu.Item key="item1">
            <Link to="/reviews">Reviews</Link>
          </Menu.Item>
          <Menu.Item key="item2">
            <Link to="/questions">Questions</Link>
          </Menu.Item>
          <Menu.Item key="item3">
            <Link to="/tours">Tours</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="3"
          title={(
            <span>
              <Icon type="user" />
              User
            </span>
          )}
        >
          <Menu.Item key="item4">Member</Menu.Item>
          <Menu.Item key="item5">Tour Guide</Menu.Item>
          <Menu.Item key="item6">Admin</Menu.Item>
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
