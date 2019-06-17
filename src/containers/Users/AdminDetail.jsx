import React from 'react';
import {
  Layout,
  Typography,
  Card,
  Icon,
  Avatar,
  Row,
  Col,
  Tag,
  Divider,
  Tabs,
  Form,
  Button,
  Input
} from 'antd';

const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;
const { TabPane } = Tabs;

// Form infomation User
const formItemLayout = {
  style: { width: '50%', margin: '30px auto' },
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const inputLayout = {
  size: 'large'
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12, offset: 12 }
};

class adminDetail extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Title level={3}>Thông tin chi tiết</Title>
        <Content>
          <Row>
            <Col span={8}>
              <Card
                bordered={false}
                cover={(
                  <Avatar
                    size={256}
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ margin: '25px auto', display: 'inherit' }}
                  />
                )}

                style={{ margin: '0 auto' }}
              >
                <Meta
                  description={(
                    <Divider>
                      <Tag color="#f50" style={{ marginRight: 0 }}>Admin</Tag>
                    </Divider>
                  )}
                  style={{ textAlign: 'center' }}
                  title={(
                    <Title
                      level={2}
                      style={{ marginBottom: 0 }}
                    >
                      Van Vy
                    </Title>
                  )}
                />
              </Card>
            </Col>
            <Col span={16}>
              <Tabs defaultActiveKey="1">
                <TabPane
                  key="1"
                  tab={(
                    <span>
                      <Icon type="user" />
                      Thông tin cá nhân
                    </span>
                  )}
                >
                  {/* Form infomation usser */}
                  <Form layout="horizontal">
                    {/* Firt Name */}
                    <Form.Item label="Tên" {...formItemLayout}>
                      <Input placeholder="Vy" {...inputLayout} />
                    </Form.Item>
                    {/* Last Name */}
                    <Form.Item label="Họ" {...formItemLayout}>
                      <Input placeholder="Van" {...inputLayout} />
                    </Form.Item>
                    <Form.Item label="Email" {...formItemLayout}>
                      <Input placeholder="abc@gmail.com" {...inputLayout} />
                    </Form.Item>
                    <Form.Item label="Phone" {...formItemLayout}>
                      <Input placeholder="+84 203 023 039" {...inputLayout} />
                    </Form.Item>
                    <Form.Item {...formItemLayout} {...formTailLayout}>
                      <Button type="primary">Submit</Button>
                      <Button style={{ marginLeft: '15px' }}>Cancel</Button>
                    </Form.Item>
                  </Form>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default adminDetail;

adminDetail.displayName = 'AdminDetail';
