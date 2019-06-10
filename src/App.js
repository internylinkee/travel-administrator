import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RenderRoutes, routes } from 'routes';
import { MasterLayout } from 'containers';
import 'app.less';
import 'assets/style/main.css';
import { isEmpty } from 'lodash';

const LOGIN_PATH = '/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // check token in props.auth & call API to get '/me'
  }

  /**
   * Dont use MasterLayout
   * @returns {boolean} if true, system wont use MasterLayout
   * @memberof App
   */
  isDontUseMasterLayout = () => {
    const { pathname } = this.props.location;
    if (pathname === LOGIN_PATH) {
      return true;
    }
    const index = routes.findIndex(route => route.path === pathname);
    return index === -1;
  }

  render() {
    console.log(this.props);

    if (this.isDontUseMasterLayout()) {
      return (<RenderRoutes history={this.props.history} routes={this.props.routes} />);
    }
    return (
      <MasterLayout
        history={this.props.history}
      >
        <RenderRoutes history={this.props.history} routes={this.props.routes} />
      </MasterLayout>
    );
  }
}

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired
  // actions: PropTypes.objectOf(PropTypes.any).isRequired,
  // auth: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  location: !isEmpty(state.router) ? state.router.location : {}
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
