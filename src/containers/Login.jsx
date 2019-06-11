import React from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Typography
} from 'antd';
import PropTypes from 'prop-types';

const { Title } = Typography;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        return false;
      }
      return true;
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <div className="login-background">
          <div className="b-login-form">
            <Title className="login-text" level={2}>Login</Title>
            <Form className="login-form" onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }]
                })(
                  <Input
                    placeholder="Username"
                    prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} type="user" />}
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }]
                })(
                  <Input
                    placeholder="Password"
                    prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} type="lock" />}
                    type="password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="true">
                  Forgot password
                </a>
                <Button className="login-form-button" htmlType="submit" size="large" type="primary">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'NormalLoginForm' })(NormalLoginForm);

WrappedNormalLoginForm.displayName = 'Login';

NormalLoginForm.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired
};

export default WrappedNormalLoginForm;
