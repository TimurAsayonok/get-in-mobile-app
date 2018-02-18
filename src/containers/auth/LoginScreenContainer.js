import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

import { authActions } from 'actions';
import { enterToAppScreenTabs } from 'root';
import { authSelector } from 'selectors';

import { PreLoaderIndicator } from 'components/tools';
import AuthComponent from 'components/auth/AuthComponent';
import { SCREEN_GRADIENT_TOP, SCREEN_GRADIENT_BUTTOM } from 'constants/UIStyles';

class LoginScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      errorMessage: null
    };

    this.loginToApp = this.loginToApp.bind(this);
    this.goToSignUpScreen = this.goToSignUpScreen.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.authStatus) {
      this.setState({
        isFetching: newProps.authStatus.isFetching,
        errorMessage: newProps.authStatus.error.message
      });
    }
    if (newProps.authStatus.isEntered) {
      enterToAppScreenTabs();
    }
  }

  render() {
    const { isFetching, errorMessage } = this.state;
    return (
      <LinearGradient colors={[SCREEN_GRADIENT_TOP, SCREEN_GRADIENT_BUTTOM]} style={{ flex: 1}}>
        {isFetching && <PreLoaderIndicator />}
        <AuthComponent
          login={this.loginToApp}
          signUp={this.goToSignUpScreen}
          errorMessage={errorMessage}
        />
      </LinearGradient>
    );
  }

  loginToApp(values) {
    const { dispatch } = this.props;

    if (values) {
      if (values.email && values.password) {
        dispatch(authActions.login(values));
      }
    }
  }

  goToSignUpScreen() {
    const { navigator } = this.props;

    navigator.push({
      screen: 'SignUpScreen',
      title: undefined,
    });
  }
}

LoginScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  authStatus: PropTypes.object.isRequired,
};

export default connect(authSelector, dispatch => ({ dispatch }))(LoginScreenContainer);