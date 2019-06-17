import React from 'react';
import {
  Layout,
  Typography,
  Card,
  Avatar,
  Tag,
  Input,
  Form,
  Button
} from 'antd';

const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const formItemLayout = {
  style: { width: '50%', margin: '30px auto' },
  labelCol: { span: 4 },
  wrapperCol: { span: 18 }
};
const inputLayout = {
  size: 'large'
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12, offset: 10 }
};


class adminNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Title level={3}>Thêm mới quản trị viên</Title>
        <Content>
          <Card
            bordered={false}
            cover={(
              <Avatar
                size={256}
                src="http://placehold.jp/ccc/000/256x256.png?text=Upload"
                style={{ margin: '0 auto', display: 'inherit' }}
              />
            )}
            style={{ margin: '0 auto' }}
          >
            <Meta style={{ textAlign: 'center' }} title="Chọn ảnh đại diện" />
          </Card>
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
            <Form.Item label="Mật khẩu" {...formItemLayout}>
              <Input placeholder="******" {...inputLayout} />
            </Form.Item>
            <Form.Item {...formItemLayout} {...formTailLayout}>
              <Button type="primary">Submit</Button>
              <Button style={{ marginLeft: '15px' }}>Cancel</Button>
            </Form.Item>
          </Form>
        </Content>
      </div>
    );
  }
}

export default adminNew;

adminNew.displayName = 'AdminNew';
