import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { goToAuthScreen } from 'root';

import { authActions } from 'actions';
import { userSelector } from 'selectors';
import { Button } from 'components/tools';

import { NAVIGATION_STYLES_MAIN, TextStyle } from 'constants/UIStyles';
import { LOG_OUT_BUTTON } from 'constants/commons';

import Styles from './styles';

class MoreScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this.logOutUser = this.logOutUser.bind(this);
  }

  render() {
    const { user } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={Styles.content}>
          <View style={Styles.header}>
            <Image
              source={user.photo ? { uri: user.photo } : require('images/user.png')}
              initWidth="120"
              initHeight="120"
              style={{ width: 120, height: 120, borderRadius: 120 / 2 }}
            />
          </View>
          <View style={Styles.body}>
            <Text style={TextStyle.title3}>{user.first_name} {user.last_name}</Text>
            <Text style={TextStyle.headLine}>{user.email}</Text>
            {user.chosenOffers && <Text style={TextStyle.body}>Chosen offers: {user.chosenOffers.length}</Text>}
          </View>
        </ScrollView>
        <Button.CustomButton
          button={LOG_OUT_BUTTON}
          onPress={this.logOutUser}
        />
      </View>
    );
  }

  logOutUser() {
    const { dispatch } = this.props;

    goToAuthScreen();
    dispatch(authActions.logout());
  }

}

MoreScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

MoreScreenContainer.navigatorStyle = { ...NAVIGATION_STYLES_MAIN };

export default connect(userSelector, dispatch => ({ dispatch }))(MoreScreenContainer);