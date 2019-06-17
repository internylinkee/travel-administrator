import React from 'react';
import {
  Layout,
  Typography,
  Table,
  Tag,
  Input,
  Row,
  Col,
  Button
} from 'antd';
import { isArray } from 'lodash';

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const data = [
  {
    key: 1,
    name: 'John Brown',
    email: 'abc@gmail.com',
    roles: ['Admin']
  },
  {
    key: 2,
    name: 'Jim Green',
    email: 'bcd@gmail.com',
    roles: ['Admin']
  },
  {
    key: 3,
    name: 'Joe Black',
    email: 'des@gmail.com',
    roles: ['Manager']
  }
];

class admins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const columns = [
      { title: '#', dataIndex: 'key', key: 'key' },
      { title: 'Tên', dataIndex: 'name', key: 'name' },
      { title: 'Email', dataIndex: 'email', key: 'email' },
      {
        title: 'Quyền',
        dataIndex: 'roles',
        key: 'roles',
        render: roles => (
          <span>
            {isArray(roles) && roles.map((role) => {
              let color = '#f50';
              if (role !== 'Admin') {
                color = '#2db7f5';
              }
              return (
                <Tag key={role} color={color}>{role}</Tag>
              );
            })}
          </span>
        )
      },
      {
        title: 'Thao tác',
        dataIndex: 'action',
        key: 'action',
        render: () => <Button ghost size="small" type="danger">Khóa tài khoản</Button>
      }
    ];
    return (
      <div>
        <Title level={3}>Danh sách quản trị viên</Title>
        <Content>
          <Row style={{ marginBottom: 20 }}>
            <Col span={6}>
              <Button href="/admins/create-new" size="large" type="primary">
                Thêm mới
              </Button>
            </Col>
            <Col offset={10} span={8}>
              <Search
                enterButton
                placeholder="Nhập từ khóa"
                size="large"
              />
            </Col>
          </Row>
          <Table columns={columns} dataSource={data} />
        </Content>
      </div>
    );
  }
}

export default admins;

admins.displayName = 'Admins';
