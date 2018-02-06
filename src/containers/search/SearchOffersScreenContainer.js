import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { authActions } from 'actions';
import { authSelector } from 'selectors';

import AuthComponent from 'components/auth/AuthComponent';
import { SCREEN_GRADIENT_TOP, SCREEN_GRADIENT_BUTTOM } from 'constants/UIStyles';

class LoginScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    this.props.dispatch(authActions.getAreas());
  }

  render() {
    return (
      <View>
        <Text>Search</Text>
      </View>
    );
  }

}

LoginScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
};

export default connect(authSelector, dispatch => ({ dispatch }))(LoginScreenContainer);