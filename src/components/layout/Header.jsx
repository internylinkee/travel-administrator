import React from 'react';
import {
  Layout,
  Menu,
  Icon,
  Avatar,
  Card,
  Button,
  Col,
  Row,
  Dropdown
} from 'antd';

// import router from './router';

const { Header } = Layout;
const { Meta } = Card;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <Card
        actions={[
          <Button.Group>
            <Button type="link">
              <Icon type="folder" />
              Cá nhân
            </Button>
            <Button type="link">
              <Icon type="logout" />
              Đăng xuất
            </Button>
          </Button.Group>
        ]}
        bordered={false}
        cover={(
          <Avatar
            size={128}
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{ margin: '25px auto', display: 'inherit' }}
          />
        )}
        hoverable
        style={{ width: 240 }}
      >
        <Meta style={{ textAlign: 'center', fontWeight: 'bold' }} title="Van Vy" />
      </Card>
    </Menu.Item>
  </Menu>

);

// eslint-disable-next-line react/prefer-stateless-function
class header extends React.Component {
  render() {
    return (
      <Header>
        <Row>
          <Col span={12}>
            <p>Dashboard</p>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="true">
                <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                <span className="info-user-name">Van Vy</span>
                <Icon type="down" />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default header;
header.displayName = 'Header';
