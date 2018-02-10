import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { authActions } from 'actions';
import { authSelector } from 'selectors';

import ChatsComponent from 'components/chats/ChatsComponent';
import { NAVIGATION_STYLES_MAIN } from 'constants/UIStyles';
import { CHATS_SCREEN_TITLE } from 'constants/texts';

class ChatsScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    // this.props.dispatch(authActions.getAreas());
  }

  render() {
    return (
      <ChatsComponent
        screenTitle={CHATS_SCREEN_TITLE}
      />
    );
  }

}

ChatsScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
};

ChatsScreenContainer.navigatorStyle = { ...NAVIGATION_STYLES_MAIN };

export default connect(authSelector, dispatch => ({ dispatch }))(ChatsScreenContainer);