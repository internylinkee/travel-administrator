import React from 'react';
import {
  Layout,
  Typography,
  Table,
  Input,
  Row,
  Col,
  Button
} from 'antd';

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const data = [
  {
    key: 1,
    name: 'John Brown',
    email: 'abc@gmail.com',
    post: '12',
    roles: ['Admin']
  },
  {
    key: 2,
    name: 'Jim Green',
    email: 'bcd@gmail.com',
    post: '2',
    roles: ['Admin']
  },
  {
    key: 3,
    name: 'Joe Black',
    email: 'des@gmail.com',
    post: '10',
    roles: ['Manager']
  }
];

class tourGuides extends React.Component {
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
        title: 'Bài viết',
        dataIndex: 'post',
        key: 'post',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.post - b.post
      },
      {
        title: 'Thao tác',
        dataIndex: '',
        key: 'x',
        render: () => <Button ghost size="small" type="danger">Khóa tài khoản</Button>
      }
    ];
    return (
      <div>
        <Title level={3}>Danh sách hướng dẫn viên</Title>
        <Content>
          <Row style={{ marginBottom: 20 }}>
            <Col offset={16} span={8}>
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

export default tourGuides;

tourGuides.displayName = 'TourGuides';
