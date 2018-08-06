import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { userActions } from 'actions';
import { chatsSelector } from 'selectors';
import { List, Title } from 'components/tools';

import { NAVIGATION_STYLES_MAIN_WITH_LARG_TITLE } from 'constants/UIStyles';

import Styles from './styles';

class ChatsScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    this.props.dispatch(userActions.getUserChats(this.props.userId));
  }

  render() {
    const { chats } = this.props;
    return (
      <ScrollView contentContainerStyle={Styles.content}>
        {!_.isEmpty(chats) && chats.map(chat => (
          <List.ChatListItem key={chat._id} chat={chat} />
        ))}
        {_.isEmpty(chats) &&
          <Title>List is empty</Title>
        }
      </ScrollView>
    );
  }

  static get options() {
    return { ...NAVIGATION_STYLES_MAIN_WITH_LARG_TITLE };
  }
}

ChatsScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  chats: PropTypes.array.isRequired
};

export default connect(chatsSelector, dispatch => ({ dispatch }))(ChatsScreenContainer);