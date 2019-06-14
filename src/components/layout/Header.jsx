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


class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Header>
        <Row>
          <Col style={{ textAlign: 'right' }}>
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
