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
  Input,
  List
} from 'antd';

const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;
const { TabPane } = Tabs;

// Form infomation User
const formItemLayout = {
  style: { width: '50%', margin: '30px auto' },
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
};
const inputLayout = {
  size: 'large'
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12, offset: 12 }
};

// List Posts
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '/reviews/1/detail',
    title: `Ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon style={{ marginRight: 8 }} type={type} />
    {text}
  </span>
);

class memberDetail extends React.Component {
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
                      <Tag color="#87d068" style={{ marginRight: 0 }}>Member</Tag>
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
                <Row style={{ textAlign: 'center', marginTop: '15px' }}>
                  <Col span={8}>
                    <Meta description="Theo dõi" title="124" />
                  </Col>
                  <Col span={8}>
                    <Meta description="Bài viết" title="14" />
                  </Col>
                  <Col span={8}>
                    <Meta description="Đánh giá" title="5" />
                  </Col>
                </Row>
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
                      <Input placeholder="abc@gmail.com" {...inputLayout} />
                    </Form.Item>
                    <Form.Item {...formItemLayout} {...formTailLayout}>
                      <Button type="primary">Submit</Button>
                      <Button style={{ marginLeft: '15px' }}>Cancel</Button>
                    </Form.Item>
                  </Form>
                </TabPane>
                <TabPane
                  key="2"
                  tab={(
                    <span>
                      <Icon type="read" />
                      Danh sách bài viết
                    </span>
                  )}
                >
                  {/* Danh sách bài viết */}
                  <Card
                    bordered={false}
                    className="b-listpost"
                  >
                    <List
                      dataSource={listData}
                      itemLayout="vertical"
                      pagination={{
                        pageSize: 3
                      }}
                      renderItem={item => (
                        <List.Item
                          key={item.title}
                          actions={[
                            <IconText text="156" type="star-o" />,
                            <IconText text="156" type="like-o" />,
                            <IconText text="2" type="message" />
                          ]}
                          extra={(
                            <img
                              alt="logo"
                              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                              width={272}
                            />
                          )}
                        >
                          <List.Item.Meta
                            description={item.description}
                            title={<a href={item.href}>{item.title}</a>}
                          />
                          {item.content}
                        </List.Item>
                      )}
                      size="large"
                    />
                  </Card>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default memberDetail;

memberDetail.displayName = 'MemberDetail';
