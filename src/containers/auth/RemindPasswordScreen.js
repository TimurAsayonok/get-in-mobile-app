import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { authActions } from 'actions';
import { remindPasswordSelector } from 'selectors';

import { PreLoaderIndicator } from 'components/tools';
import RemindPasswordComponent from 'components/remindPassword/RemindPasswordComponent';
import { NAVIGATION_STYLES_MAIN } from 'constants/UIStyles';

class RemindPasswordScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      errorMessage: null
    };

    this.remindPassword = this.remindPassword.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.remindPasswordStatus) {
      this.setState({
        isFetching: newProps.remindPasswordStatus.isFetching,
        errorMessage: newProps.remindPasswordStatus.error.message
      });
    }

    if (newProps.remindPasswordStatus.wasReminded) {
      Alert.alert(
        'Remind password',
        'Password was successfully sent to your email. Please, check your email.',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    const { isFetching, errorMessage } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {isFetching && <PreLoaderIndicator />}
        <RemindPasswordComponent
          remindPassword={this.remindPassword}
          errorMessage={errorMessage}
        />
      </View>
    );
  }

  remindPassword(values) {
    const { dispatch } = this.props;

    dispatch(authActions.remindPassword(values));
  }

}

RemindPasswordScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
};

RemindPasswordScreenContainer.navigatorStyle = { ...NAVIGATION_STYLES_MAIN };

export default connect(remindPasswordSelector, dispatch => ({ dispatch }))(RemindPasswordScreenContainer);