import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { authActions } from 'actions';
import { authSelector } from 'selectors';
import { List, Title } from 'components/tools';
import { enterToAppScreenTabs } from 'root';

import { PreLoaderIndicator } from 'components/tools';
import SignUpComponent from 'components/signUp/SignUpComponent';
import { NAVIGATION_STYLES_MAIN } from 'constants/UIStyles';
import { CHATS_SCREEN_TITLE } from 'constants/texts';

class SignUpScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      errorMessage: null
    };

    this.signUp = this.signUp.bind(this);
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
      <View style={{ flex: 1 }}>
        {isFetching && <PreLoaderIndicator />}
        <SignUpComponent
          signUp={this.signUp}
          errorMessage={errorMessage}
        />
      </View>
    );
  }

  signUp(values) {
    const { dispatch } = this.props;

    dispatch(authActions.singUp(values));
  }

}

SignUpScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
};

SignUpScreenContainer.navigatorStyle = { ...NAVIGATION_STYLES_MAIN };

export default connect(authSelector, dispatch => ({ dispatch }))(SignUpScreenContainer);